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
      </Content>
    </Container>
  );
}

export default Home;