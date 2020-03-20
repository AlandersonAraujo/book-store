import React from 'react';
import {
  Container,
  ButtonPrice,
  ButtonPreview,
  TextPrice,
  TextPreview,
} from './styles';

export default function Button() {
  return (
    <Container>
      <ButtonPrice onPress={() => {}}>
        <TextPrice>R$ 47,90</TextPrice>
      </ButtonPrice>
      <ButtonPreview onPress={() => {}}>
        <TextPreview>Preview</TextPreview>
      </ButtonPreview>
    </Container>
  );
}
