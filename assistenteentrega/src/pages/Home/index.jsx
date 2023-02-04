import React from 'react';
import Header from '../../components/Header/index.jsx';
import './styles.js'

// import { Container } from './styles';

function Home() {
  return (
    <div className='container'>
      <Header />
      <h1>
        Hello world
      </h1>
    </div>
  );
}

export default Home;