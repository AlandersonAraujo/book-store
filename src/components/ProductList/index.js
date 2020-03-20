import React, {useEffect, useState} from 'react';
import {Container, Title, TabContainer, Tab, Image, TabItem} from './styles';
import book1 from '../../assets/book1.png';
import book2 from '../../assets/book2.png';
import book3 from '../../assets/book3.png';
import book4 from '../../assets/book4.png';
import book5 from '../../assets/book5.png';
import book6 from '../../assets/book6.png';
import book7 from '../../assets/book7.png';
import book8 from '../../assets/book8.png';

export default function ProductList() {
  const [dados, setdados] = useState([
    {
      id: 1,
      imagebook: book1,
    },
    {
      id: 2,
      imagebook: book2,
    },
    {
      id: 3,
      imagebook: book3,
    },
    {
      id: 4,
      imagebook: book4,
    },
    {
      id: 5,
      imagebook: book5,
    },
    {
      id: 6,
      imagebook: book6,
    },
    {
      id: 7,
      imagebook: book7,
    },
    {
      id: 8,
      imagebook: book8,
    },
  ]);
  return (
    <Container>
      <Title>Você também pode gostar</Title>
      <TabContainer>
        {dados.map(item => (
          <Tab>
            <TabItem key={item.id}>
              <Image source={item.imagebook} />
            </TabItem>
          </Tab>
        ))}
      </TabContainer>
    </Container>
  );
}
