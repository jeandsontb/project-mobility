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
  const [context] = AppStateValue();
  const netInfo = useNetInfo();

  const [packageData, setPackageData] = useState([]);
  const [packageStatus, setPackageStatus] = useState([]);
  const [connection, setConnection] = useState(false);

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise) {
      formatData();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route]);

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise) {
      verifyConnection();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo]);

  const verifyConnection = async () => {
    if (netInfo.isConnected) {
      setConnection(true);

      let packagePreSinc = await context.app.package.filter(
        obj =>
          obj.status === 'Pendente a sincronizar' && obj.package.length > 10,
      );

      await packagePreSinc.map(async obj => {
        let res = await api.addTracking(obj.id, obj.package);

        // if (res) {
        let updateStatusPackage = packageStatus;
        for (let i = 0; i < updateStatusPackage.length; i++) {
          if (updateStatusPackage[i].id === obj.id) {
            updateStatusPackage[i].status = 'Sincronizado';
            console.log(updateStatusPackage);
          }
        }
        // }
      });
    } else {
      setConnection(false);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const formatData = () => {
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
    setPackageStatus(showPackage);
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
            renderItem={PackageStatus}
            keyExtractor={item => item.package}
          />
        )}
      </Styled.BoxStatusHistory>
    </Styled.Container>
  );
};

export default Status;
