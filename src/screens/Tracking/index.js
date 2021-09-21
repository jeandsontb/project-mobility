import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {colors} from '../../theme';
import Styled from './style';
import api from '../../service/api';

const Tracking = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [dataPackage, setDataPackage] = useState();

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise) {
      dataTrackingPackage();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route]);

  const dataTrackingPackage = async () => {
    const result = await api.getTrackingId(route.params.id);

    console.log(result);
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
        <Styled.TextPoints>points</Styled.TextPoints>
      </Styled.PackageContainer>
    </Styled.Container>
  );
};

export default Tracking;
