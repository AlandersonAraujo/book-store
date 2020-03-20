import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 47.81px;
`;

export const ButtonPrice = styled.View`
  height: 63.75px;
  width: 150px;
  background-color: rgb(255, 255, 255);
  margin-left: 50.46px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const ButtonPreview = styled.View`
  height: 63.75px;
  width: 150px;
  background-color: rgb(239, 130, 98);
  margin-right: 50.46px;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
`;

export const TextPrice = styled.Text`
  color: rgb(0, 0, 0);
  font-size: 21px;
`;

export const TextPreview = styled.Text`
  color: rgb(255, 255, 255);
  font-size: 21px;
`;
