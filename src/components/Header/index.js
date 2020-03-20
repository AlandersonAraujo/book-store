import React from 'react';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header() {
  return (
    <Container>
      <Icon name="close" size={30} color="rgb(255, 255, 255)" />
      <Icon name="shoppingcart" size={30} color="rgb(255, 255, 255)" />
    </Container>
  );
}
