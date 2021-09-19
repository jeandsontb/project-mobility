import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import Styled from './style';
import {colors} from '../../theme';
import ButtonsInterval from '../../components/ButtonsInterval';
import {AppStateValue} from '../../context/StateContext';
import StatusTracking from '../../components/StatusTracking';

let timerId;
let object = [];
const Home = () => {
  const navigation = useNavigation();
  const [context, dispatch] = AppStateValue();

  const [statusService, setStatusService] = useState(false);
  const [dataTracking, setDataTracking] = useState([]);

  const handleNavitationStatus = () => {
    navigation.navigate('Status');
  };

  useEffect(() => {
    if (statusService === true) {
      initialProgressPackage('start');
    } else {
      initialProgressPackage('stop');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusService]);

  const initialProgressPackage = option => {
    let date = new Date();
    let temp = context.app.buttonTemp ? context.app.buttonTemp : 10000;

    if (option === 'start') {
      timerId = setInterval(() => {
        Geolocation.getCurrentPosition(location => {
          object.push({
            id: date.getTime(),
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            speed: location.coords.speed,
            time: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
          });

          console.log(object);
        });
      }, temp);
    } else {
      clearInterval(timerId);
      // setDataTracking([...dataTracking, object]);
      let time = new Date();
      time = `${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}`;

      let dataObject = {
        id: date.getTime(),
        time: time,
        package: JSON.stringify(object),
      };

      dispatch({
        type: 'setPakage',
        payload: {
          package: [...context.app.package, dataObject],
        },
      });

      object = [];
    }
  };

  const handleActiveTracking = () => {
    setStatusService(!statusService);
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
