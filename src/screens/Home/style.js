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
};
