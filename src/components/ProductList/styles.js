import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 45px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: rgb(255, 255, 255);
  margin-left: 32px;
`;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {padding: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})``;

export const Tab = styled.View`
  display: flex;
  width: 92.97px;
  margin-right: 16px;
  margin-bottom: 10px;
`;

export const TabItem = styled.View`
  width: 92.97px;
  height: 148.75px;
  border-radius: 9.29px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  height: 148.75px;
  width: 92.97px;
  border-radius: 9.29px;
`;
