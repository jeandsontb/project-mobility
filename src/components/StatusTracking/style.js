import styled from 'styled-components/native';
import {colors} from '../../theme';

export default {
  BoxTracking: styled.View`
    flex-direction: row;
    height: 120px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.greyActive};
  `,
  BoxIconTracking: styled.View`
    width: 120px;
    height: 120px;
    justify-content: center;
    align-items: center;
  `,
  BoxInfoTracking: styled.View`
    justify-content: center;
  `,
  TextInfoTracking: styled.Text`
    font-size: 20px;
    font-weight: bold;
  `,
  TextStatusTracking: styled.Text`
    font-size: 16px;
    color: ${props => props.colorStatus};
    font-style: italic;
  `,
};
