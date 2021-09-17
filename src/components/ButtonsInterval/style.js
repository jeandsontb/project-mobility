import styled from 'styled-components/native';
import {colors} from '../../theme';

export default {
  BoxIntervalCommunication: styled.View`
    flex: 1;
    margin-top: 20px;
    padding: 0 8%;
  `,
  TextCommunication: styled.Text`
    font-size: 18px;
  `,
  BoxOptionChoiceInterval: styled.View`
    flex-direction: row;
    justify-content: space-between;
  `,
  ButtonDetailInterval: styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${props =>
      props.color ? colors.greenActive : colors.greyActive};
    background-color: ${props =>
      props.color ? colors.greenClean : 'transparent'};
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 5px;
  `,
  TextOptionChoice: styled.Text`
    font-size: 24px;
    color: ${props => (props.color ? colors.greenActive : colors.greyActive)}; ;
  `,
};
