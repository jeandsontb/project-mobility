import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import uuid from 'react-native-uuid';

import Styled from './style';
import {colors} from '../../theme';
import ButtonsInterval from '../../components/ButtonsInterval';
import {AppStateValue} from '../../context/StateContext';
import StatusTracking from '../../components/StatusTracking';

let timerId;
let object = [];
let date = new Date();

const Home = () => {
  const navigation = useNavigation();
  const [context, dispatch] = AppStateValue();

  const [statusService, setStatusService] = useState(false);

  useEffect(() => {
    if (statusService === true) {
      startProgressPackage();
    } else {
      stopProgressPackage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusService]);

  const handleNavitationStatus = () => {
    navigation.navigate('Status');
  };

  const handleActiveTracking = () => {
    setStatusService(!statusService);
  };

  const startProgressPackage = () => {
    let temp = context.app.buttonTemp ? context.app.buttonTemp : 10000;

    timerId = setInterval(() => {
      Geolocation.getCurrentPosition(location => {
        object.push({
          id: uuid.v4(),
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          speed: location.coords.speed,
          time: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        });
      });
    }, temp);
  };

  const stopProgressPackage = () => {
    clearInterval(timerId);
    let time = new Date();
    time = `${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}`;

    let dataObject = {
      id: uuid.v4(),
      time: time,
      package: JSON.stringify(object),
      status: false,
    };

    dispatch({
      type: 'setPakage',
      payload: {
        package: [...context.app.package, dataObject],
      },
    });

    object = [];
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

      <StatusTracking />

      <Styled.BoxStatusService>
        <Styled.BoxTextService>
          <Styled.TextStatusService>Status do serviço</Styled.TextStatusService>
          <Styled.TextInfoService>
            {statusService === false ? 'Servico parado' : 'Servico ativo'}
          </Styled.TextInfoService>
        </Styled.BoxTextService>

        <Styled.BoxChoiceService>
          <Styled.ChoiceStatusService
            trackColor={{false: colors.greyActive, true: colors.greyActive}}
            thumbColor={statusService ? colors.greenActive : colors.redActive}
            onValueChange={handleActiveTracking}
            value={statusService}
          />
        </Styled.BoxChoiceService>
      </Styled.BoxStatusService>

      <ButtonsInterval />
    </Styled.Container>
  );
};

export default Home;
