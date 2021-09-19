import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {colors} from '../../theme';
import PackageStatus from '../../components/PackageStatus';
import {AppStateValue} from '../../context/StateContext';

import Styled from './style';

const Status = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [context] = AppStateValue();

  const [packageData, setPackageData] = useState([]);
  const [packageStatus, setPackageStatus] = useState([]);

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise) {
      formatData();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const formatData = () => {
    let ver = context.app.package
      .map(data => {
        if (data.package.length > 0) {
          let objectFilter = {
            package: data.id,
            status: 'Pendente a sincronizar',
            time: data.time,
          };

          return objectFilter;
        }
      })
      .filter(filt => filt !== undefined);
    setPackageStatus(ver);
  };

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
        {packageStatus.length > 0 && (
          <Styled.ListBoxPackage
            data={packageStatus}
            renderItem={PackageStatus}
            keyExtractor={item => item.package}
          />
        )}
      </Styled.BoxStatusHistory>
    </Styled.Container>
  );
};

export default Status;
