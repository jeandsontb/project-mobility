import styled from 'styled-components/native';
import {colors} from '../../theme';

export default {
  BoxStatus: styled.View`
    flex-direction: row;
    width: 100%;
    border-top-width: ${props => (props.borderId === 0 ? '1px' : 0)};
    border-bottom-width: 1px;
    border-top-color: ${colors.greyActive};
    border-bottom-color: ${colors.greyActive};
    padding: 10px 0;
  `,
  LeftBoxStatus: styled.View`
    flex: 1;
  `,
  TextIdStatus: styled.Text`
    font-size: 18px;
  `,
  TextSendStatus: styled.Text`
    font-size: 15px;
  `,
  RightBoxStatus: styled.View`
    width: 60px;
  `,
  TextTimeStatus: styled.Text`
    text-align: right;
    color: ${colors.greyStrong};
  `,
};
