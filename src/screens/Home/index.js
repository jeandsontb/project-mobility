import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styled from './style';
import {colors} from '../../theme';
import ButtonsInterval from '../../components/ButtonsInterval';
import {AppStateValue} from '../../context/StateContext';
import StatusTracking from '../../components/StatusTracking';

const Home = () => {
  const navigation = useNavigation();
  const [context] = AppStateValue();

  const [statusService, setStatusService] = useState(false);

  const handleNavitationStatus = () => {
    navigation.navigate('Status');
  };

  console.log(context.app.buttonTemp);

  return (
    <Styled.Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.blueActive} />

      <Styled.BoxHeader>
        <Styled.LefTextHeader>Olá, Bem vindo</Styled.LefTextHeader>

        <Styled.RightButtonHeader
          onPress={handleNavitationStatus}
          activeOpacity={0.6}>
          <Styled.RightTextHeader>Status</Styled.RightTextHeader>
        </Styled.RightButtonHeader>
      </Styled.BoxHeader>

      <StatusTracking />

      <Styled.BoxStatusService>
        <Styled.BoxTextService>
          <Styled.TextStatusService>Status do serviço</Styled.TextStatusService>
          <Styled.TextInfoService>Servico ativo</Styled.TextInfoService>
        </Styled.BoxTextService>

        <Styled.BoxChoiceService>
          <Styled.ChoiceStatusService
            trackColor={{false: colors.greyActive, true: colors.greyActive}}
            thumbColor={statusService ? colors.greenActive : colors.redActive}
            onValueChange={() => setStatusService(!statusService)}
            value={statusService}
          />
        </Styled.BoxChoiceService>
      </Styled.BoxStatusService>

      <ButtonsInterval />
    </Styled.Container>
  );
};

export default Home;
