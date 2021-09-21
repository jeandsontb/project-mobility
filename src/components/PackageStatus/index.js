import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Styled from './style';

const PackageStatus = ({item, index}) => {
  const navigation = useNavigation();

  const handleRenderPackage = id => {
    console.log(id);
  };

  return (
    <Styled.BoxStatus
      key={item.id}
      borderId={index}
      onPress={() => handleRenderPackage(item.package)}
      activeOpacity={0.5}>
      <Styled.LeftBoxStatus>
        <Styled.TextIdStatus>Pacote ID: {item.package}</Styled.TextIdStatus>
        <Styled.TextSendStatus>
          {item.status === true ? 'Sincronizado' : 'Pendente Sincronizar'}
        </Styled.TextSendStatus>
      </Styled.LeftBoxStatus>

      <Styled.RightBoxStatus>
        <Styled.TextTimeStatus>{item.time}</Styled.TextTimeStatus>
      </Styled.RightBoxStatus>
    </Styled.BoxStatus>
  );
};

export default PackageStatus;
