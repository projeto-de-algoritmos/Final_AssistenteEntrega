import React, { useState } from 'react';
import Header from '../../components/Header/index.jsx';
import Card from './components/Card/index.jsx';
import { Container, Content } from './styles';

function Home() {
  const [options, setOptions] = useState([
    { name: 'Cadastrar items' },
    { name: 'Gerenciar items' },
    { name: 'Mostrar melhor rota' }
  ])

  return (
    <Container>
      <Header />
      <Content>
        {options.map(item => (
          <Card />
        ))}
      </Content>
    </Container>
  );
}

export default Home;