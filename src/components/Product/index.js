import React from 'react';
import {
  Container,
  ProductImage,
  Image,
  ContainerDescription,
  Title,
  Author,
  ContainerRanking,
  Ranking,
  Count,
} from './styles';
import BookImage from '../../assets/antifragil.png';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Product() {
  return (
    <Container>
      <ProductImage>
        <Image source={BookImage} />
      </ProductImage>
      <ContainerDescription>
        <Title>Antifrágil</Title>
        <Author>Nassim Nicholas Taleb</Author>
      </ContainerDescription>
      <ContainerRanking>
        <Icon name="star" size={18} color="rgb(255, 221, 79)" />
        <Ranking>4.8</Ranking>
        <Count>(2390)</Count>
      </ContainerRanking>
    </Container>
  );
}
