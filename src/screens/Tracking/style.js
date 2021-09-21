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
  PackageContainer: styled.View`
    flex: 1;
    padding: 20px 10px 10px 10px;
  `,
  ListPackage: styled.ScrollView`
    width: 100%;
    height: 100%;
  `,
  BoxCoords: styled.Text`
    background-color: ${colors.whiteActive};
    width: 100%;
    padding: 10px 6px;
    margin-bottom: 5px;
    elevation: 4;
  `,
  TextPackage: styled.Text`
    font-size: 16px;
    color: ${colors.blueActive};
  `,
};
