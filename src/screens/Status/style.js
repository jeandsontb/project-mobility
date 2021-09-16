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
};
