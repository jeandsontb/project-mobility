import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styled from './style';
import {colors} from '../../theme';

const Home = () => {
  const navigation = useNavigation();

  const [connection, setConnection] = useState(false);
  const [statusService, setStatusService] = useState(false);
  const [active, setActive] = useState(false);

  const count = [
    {active: false, time: '10s'},
    {active: false, time: '5s'},
    {active: false, time: '3s'},
    {active: false, time: '1s'},
  ];

  const handleNavitationStatus = () => {
    navigation.navigate('Status');
  };

  const handleActiveButton = identifier => {
    console.log(identifier);

    let modify = [...count, (count[identifier].active = true)];

    console.log(modify);
  };

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

      <Styled.BoxIntervalCommunication>
        <Styled.TextCommunication>
          Intervalo de comunicação
        </Styled.TextCommunication>

        <Styled.BoxOptionChoiceInterval>
          {count.map((item, index) => (
            <Styled.ButtonDetailInterval
              key={index}
              color={active}
              onPress={() => handleActiveButton(index)}
              activeOpacity={0.9}>
              <Styled.TextOptionChoice color={active}>
                {item.time}
              </Styled.TextOptionChoice>
            </Styled.ButtonDetailInterval>
          ))}
        </Styled.BoxOptionChoiceInterval>
      </Styled.BoxIntervalCommunication>
    </Styled.Container>
  );
};

export default Home;
