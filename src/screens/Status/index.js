import React from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../theme';

import Styled from './style';

const Status = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Styled.Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.blueActive} />

      <Styled.BoxHeader>
        <Styled.RightButtonHeader onPress={handleGoBack} activeOpacity={0.6}>
          <Styled.RightTextHeader>Voltar</Styled.RightTextHeader>
        </Styled.RightButtonHeader>

        <Styled.LefTextHeader>Status</Styled.LefTextHeader>
      </Styled.BoxHeader>
    </Styled.Container>
  );
};

export default Status;
