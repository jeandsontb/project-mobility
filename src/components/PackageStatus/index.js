import React from 'react';

import Styled from './style';

const PackageStatus = ({item, index}) => {
  return (
    <Styled.BoxStatus key={item.package} borderId={index}>
      <Styled.LeftBoxStatus>
        <Styled.TextIdStatus>Pacote ID: {item.package}</Styled.TextIdStatus>
        <Styled.TextSendStatus>{item.status}</Styled.TextSendStatus>
      </Styled.LeftBoxStatus>

      <Styled.RightBoxStatus>
        <Styled.TextTimeStatus>{item.time}</Styled.TextTimeStatus>
      </Styled.RightBoxStatus>
    </Styled.BoxStatus>
  );
};

export default PackageStatus;
