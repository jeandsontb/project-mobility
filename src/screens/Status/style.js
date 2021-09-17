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
  LeftButtonHeader: styled.TouchableOpacity`
    width: 80px;
  `,
  LeftTextHeader: styled.Text`
    color: ${colors.whiteActive};
    font-weight: bold;
    font-size: 18px;
  `,
  RightTextHeader: styled.Text`
    flex: 1;
    text-align: center;
    margin-right: 80px;
    color: ${colors.greyActive};
    font-size: 16px;
  `,
  BoxStatusHistory: styled.View`
    flex: 1;
    margin-top: 20px;
  `,
  ListBoxPackage: styled.FlatList`
    width: 100%;
    height: 100%;
    padding: 0 5%;
  `,
};
