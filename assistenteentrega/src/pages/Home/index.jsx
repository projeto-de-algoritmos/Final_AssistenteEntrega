import colors from '../../colors'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/index.jsx';
import { populateEntrega } from '../../store/reducers/delivery.js';
import { populateEstoque } from '../../store/reducers/estoque.js';
import { populateMap } from '../../store/reducers/graphs.js';
import { Container, Content } from './styles';

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(populateEstoque())
    dispatch(populateEntrega())
    dispatch(populateMap())
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <h1 style={{
          textAlign: 'center',
          color: colors.bg01
        }}>
          Tenha controle de estoques através da aba estoques, e gerencie as entregas na aba entregas
        </h1>
      </Content>
    </Container>
  );
}

export default Home;