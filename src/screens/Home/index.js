import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styled from './style';
import {colors} from '../../theme';
import ButtonsInterval from '../../components/ButtonsInterval';
import {AppStateValue} from '../../context/StateContext';

const Home = () => {
  const navigation = useNavigation();
  const [context, dispatch] = AppStateValue();

  const [connection, setConnection] = useState(false);
  const [statusService, setStatusService] = useState(false);
  const [tempInterval, setTempInterval] = useState('');

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

      <Styled.BoxTracking>
        <Styled.BoxIconTracking>
          <Icon name="compass" color={colors.blueRelative} size={60} />
        </Styled.BoxIconTracking>

        <Styled.BoxInfoTracking>
          <Styled.TextInfoTracking>My GPS - Tracking</Styled.TextInfoTracking>
          <Styled.TextStatusTracking
            colorStatus={connection ? colors.greenActive : colors.redActive}>
            {connection ? 'Online' : 'Off-line'}
          </Styled.TextStatusTracking>
        </Styled.BoxInfoTracking>
      </Styled.BoxTracking>

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

      {console.log(tempInterval)}
    </Styled.Container>
  );
};

export default Home;
