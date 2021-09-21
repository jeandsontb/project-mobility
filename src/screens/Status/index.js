import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';

import {colors} from '../../theme';
import PackageStatus from '../../components/PackageStatus';
import {AppStateValue} from '../../context/StateContext';
import api from '../../service/api';

import Styled from './style';

const Status = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const netInfo = useNetInfo();
  const [context] = AppStateValue();

  const [packageStatus, setPackageStatus] = useState([]);

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise) {
      formDataStatus();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route]);

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise && netInfo.isConnected === true) {
      formSendDataPakage();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const formDataStatus = () => {
    let showPackage = context.app.package
      .map(data => {
        if (data.package.length > 10) {
          let objectFilter = {
            package: data.id,
            status: data.status,
            time: data.time,
          };
          return objectFilter;
        }
      })
      .filter(filt => filt !== undefined);

    if (showPackage) {
      setPackageStatus(showPackage);
    }
  };

  const formSendDataPakage = async () => {
    if (netInfo.isConnected) {
      let packagePreSinc = await context.app.package.filter(
        obj => obj.status === false && obj.package.length > 10,
      );

      for (let i = 0; i < packagePreSinc.length; i++) {
        // let result = await api.addTracking(
        //   packagePreSinc[i].id,
        //   packagePreSinc[i].package,
        // );
        let result = true;

        if (result) {
          // let checkPackage = packageStatus.filter(
          //   clean => clean.id === packagePreSinc[i].id,
          // );
          // console.log(checkPackage);
          // setPackageStatus(checkPackage);

          const setStatusPackage = packagePreSinc.map(item => {
            if (item.id === '8618533a-8fd7-4ba6-bf9e-935f52bae3d6') {
              item.status = true;
              formDataStatus();
            }
            return item;
          });

          // console.log('novo inicio');
          // console.log(setStatusPackage);
          // console.log('novo fim');
        }

        // console.log('inicio context');
        // console.log(context.app.package);
        // console.log('fim context');
      }
    }
  };

  const handleRenderPackage = id => {
    navigation.navigate('Tracking', {
      id,
    });
  };

  return (
    <Styled.Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.blueActive} />

      <Styled.BoxHeader>
        <Styled.LeftButtonHeader onPress={handleGoBack} activeOpacity={0.6}>
          <Styled.LeftTextHeader>Voltar</Styled.LeftTextHeader>
        </Styled.LeftButtonHeader>

        <Styled.RightTextHeader>Status</Styled.RightTextHeader>
      </Styled.BoxHeader>

      <Styled.BoxStatusHistory>
        {packageStatus.length > 0 && (
          <Styled.ListBoxPackage
            data={packageStatus}
            renderItem={({item, index}) => (
              <Styled.BoxStatus
                key={item.package}
                borderId={index}
                onPress={() => handleRenderPackage(item.package)}
                activeOpacity={0.5}>
                <Styled.LeftBoxStatus>
                  <Styled.TextIdStatus>
                    Pacote ID: {item.package}
                  </Styled.TextIdStatus>
                  <Styled.TextSendStatus>
                    {item.status === true
                      ? 'Sincronizado'
                      : 'Pendente Sincronizar'}
                  </Styled.TextSendStatus>
                </Styled.LeftBoxStatus>

                <Styled.RightBoxStatus>
                  <Styled.TextTimeStatus>{item.time}</Styled.TextTimeStatus>
                </Styled.RightBoxStatus>
              </Styled.BoxStatus>
            )}
            keyExtractor={item => item.package}
          />
        )}
      </Styled.BoxStatusHistory>
    </Styled.Container>
  );
};

export default Status;
