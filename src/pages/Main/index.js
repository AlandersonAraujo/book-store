import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Button from '../../components/Button';
import ProductList from '../../components/ProductList';

export default function Main() {
  return (
    <Container>
      <Header />
      <Product />
      <Button />
      <ProductList />
    </Container>
  );
}
