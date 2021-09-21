import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';

import {colors} from '../../theme';
import Styled from './style';
import api from '../../service/api';

const Tracking = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const netInfo = useNetInfo();

  const [dataPackage, setDataPackage] = useState([]);
  const [infoTracking, setInfoTracking] = useState('');

  useEffect(() => {
    if (netInfo.isConnected) {
      dataTrackingPackage();
      setInfoTracking('');
    } else {
      setInfoTracking('Sem conexão para visualizar esse pacote');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo]);

  const dataTrackingPackage = async () => {
    const result = await api.getTrackingId(route.params.id);

    if (result.points.obj.length > 0) {
      setDataPackage(result.points);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Styled.Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.blueActive} />

      <Styled.BoxHeader>
        <Styled.LeftButtonHeader onPress={handleGoBack} activeOpacity={0.6}>
          <Styled.LeftTextHeader>Voltar</Styled.LeftTextHeader>
        </Styled.LeftButtonHeader>

        <Styled.RightTextHeader>Tracking</Styled.RightTextHeader>
      </Styled.BoxHeader>

      <Styled.PackageContainer>
        <Styled.ListPackage>
          <Styled.BoxCoords>
            <Styled.TextPackage>
              {infoTracking} {dataPackage.obj}
            </Styled.TextPackage>
          </Styled.BoxCoords>
        </Styled.ListPackage>
      </Styled.PackageContainer>
    </Styled.Container>
  );
};

export default Tracking;
