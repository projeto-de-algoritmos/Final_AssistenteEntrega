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
        <LinkItem to='/estoque'>Estoque</LinkItem>
        <LinkItem to='/entrega'>Entregas</LinkItem>
      </LinksContainer>
    </Container>
  );
}

export default Header;