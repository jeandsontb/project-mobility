import React from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../theme';
import PackageStatus from '../../components/PackageStatus';

import Styled from './style';

const Status = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

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

        <Styled.ListBoxPackage
          data={data}
          renderItem={PackageStatus}
          keyExtractor={item => item.package}
        />
      </Styled.BoxStatusHistory>
    </Styled.Container>
  );
};

export default Status;
