import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNetInfo} from '@react-native-community/netinfo';
import {colors} from '../../theme';

import Styled from './style';

const StatusTracking = () => {
  const netInfo = useNetInfo();

  const [connection, setConnection] = useState(false);

  useEffect(() => {
    let cancelPromise = true;

    if (cancelPromise) {
      verifyConnection();
    }

    return () => (cancelPromise = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo]);

  const verifyConnection = () => {
    if (netInfo.isConnected) {
      setConnection(true);
    } else {
      setConnection(false);
    }
  };

  return (
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
  );
};

export default StatusTracking;
