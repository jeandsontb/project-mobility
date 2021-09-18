import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GetLocation from 'react-native-get-location';

import Styled from './style';
import {colors} from '../../theme';
import ButtonsInterval from '../../components/ButtonsInterval';
import {AppStateValue} from '../../context/StateContext';
import StatusTracking from '../../components/StatusTracking';

let timer;
const Home = () => {
  const navigation = useNavigation();
  const [context] = AppStateValue();

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
  }, [statusService]);

  const initialProgressPackage = option => {
    let counter = 0;
    if (option === 'start') {
      timer = setInterval(() => {
        console.log(counter++);
      }, 1000);
    } else {
      clearInterval(timer);
    }
  };

  const locationFindProcess = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        let date = new Date();
        let temp = context.app.buttonTemp ? context.app.buttonTemp : 10000;

        if (statusService !== true) {
          // let idInterval = setInterval(() => {
          //   object.push({
          //     id: date.getTime(),
          //     latitude: location.latitude,
          //     longitude: location.longitude,
          //     speed: location.speed,
          //     time: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
          //   });
          //   console.log(object);
          // }, temp);
          // if (statusService === false) {
          //   console.log('falso');
          //   clearInterval(idInterval);
          // }
          // console.log('entrou');
          // let one = 1;
          // var meuInterval = setInterval(() => {
          //   console.log(one + 1);
          // }, 1000);
          // if (statusService === true) {
          //   clearInterval(meuInterval);
          //   console.log('fecha');
          // }
        }
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };
  // console.log(dataTracking);

  const handleActiveTracking = () => {
    setStatusService(!statusService);
    // locationFindProcess();
  };

  // console.log(context.app.buttonTemp);

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
