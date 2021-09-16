import styled from 'styled-components/native';
import {colors} from '../../theme';

export default {
  Container: styled.View`
    flex: 1;
  `,
  //######### HEADER ###########
  BoxHeader: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
    height: 60px;
    background-color: ${colors.blueRelative};
  `,
  LefTextHeader: styled.Text`
    color: ${colors.greyActive};
    font-size: 16px;
  `,
  RightButtonHeader: styled.TouchableOpacity``,
  RightTextHeader: styled.Text`
    color: ${colors.whiteActive};
    font-weight: bold;
    font-size: 18px;
  `,
  //######### TRACKING ###########
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
  //####### STATUS SERVICE ########
  BoxStatusService: styled.View`
    flex-direction: row;
    height: 100px;
    padding: 0 8%;
  `,
  BoxTextService: styled.View`
    flex: 1;
    justify-content: center;
  `,
  TextStatusService: styled.Text`
    font-size: 20px;
  `,
  TextInfoService: styled.Text`
    font-size: 15px;
    color: ${colors.greyStrong};
  `,
  BoxChoiceService: styled.View`
    justify-content: center;
  `,
  ChoiceStatusService: styled.Switch``,
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
