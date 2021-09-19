import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {colors} from '../../theme';
import PackageStatus from '../../components/PackageStatus';
import {AppStateValue} from '../../context/StateContext';

import Styled from './style';

const Status = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [context] = AppStateValue();

  const [packageData, setPackageData] = useState([]);
  const [packageStatus, setPackageStatus] = useState([]);

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise) {
      formatData();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  console.log(context.app.package);

  const formatData = () => {
    let time = new Date();
    time = `${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}`;

    let ver = context.app.package
      .map(data => {
        if (data[0] !== undefined) {
          let objectFilter = {
            package: data[0].id,
            status: 'Pendente a sincronizar',
            time: time,
          };
          return objectFilter;
        }
      })
      .filter(f => f !== undefined);
    setPackageStatus(ver);
  };

  // const formatData = () => {
  //   let time = new Date();
  //   time = `${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}`;

  //   let ver = context.app.package
  //     .map(data => {
  //       if (data[0] !== undefined) {
  //         let objectFilter = {
  //           package: data[0].id,
  //           status: 'Pendente a sincronizar',
  //           time: time,
  //         };
  //         return objectFilter;
  //       }
  //     })
  //     .filter(f => f !== undefined);
  //   setPackageStatus(ver);
  // };

  let data = [
    {
      package: '121212',
      status: 'Sincronizado',
      time: '11:23',
    },
    {
      package: '131313',
      status: 'Sincronizado',
      time: '11:23',
    },
    {
      package: '141414',
      status: 'Pendente a sincronizar',
      time: '11:23',
    },
  ];

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
        {/* {data.map((item, index) => (
            <Styled.BoxStatus key={index} borderId={index}>
              <Styled.LeftBoxStatus>
                <Styled.TextIdStatus>
                  Pacote ID: {item.package}
                </Styled.TextIdStatus>
                <Styled.TextSendStatus>{item.status}</Styled.TextSendStatus>
              </Styled.LeftBoxStatus>

              <Styled.RightBoxStatus>
                <Styled.TextTimeStatus>{item.time}</Styled.TextTimeStatus>
              </Styled.RightBoxStatus>
            </Styled.BoxStatus>
          ))} */}

        {packageStatus.length > 0 && (
          <Styled.ListBoxPackage
            data={data}
            renderItem={PackageStatus}
            keyExtractor={item => item.package}
          />
        )}
      </Styled.BoxStatusHistory>
    </Styled.Container>
  );
};

export default Status;
