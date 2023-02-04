import React from 'react';
import { Container, Icon, LinkItem, LinksContainer, IconContainer, Title } from './styles';
import Logo from '../../assets/logo-favicon.svg'
// import { Container } from './styles';

function Header() {
  return (
    <Container>
      <IconContainer>
        <Icon src={Logo} />
        <Title>Assistente<br/>Entrega</Title>
      </IconContainer>
      <LinksContainer>
        <LinkItem to='/'>Home</LinkItem>
        <LinkItem to='/register'>Registrar<br/>estoque</LinkItem>
        <LinkItem to='/map'>Agendar<br/>entrega</LinkItem>
        <LinkItem to='/management'>Fazer<br/>entrega</LinkItem>
      </LinksContainer>
    </Container>
  );
}

export default Header;