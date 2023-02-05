import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../colors";

const Container = styled.div`
  background-color: ${colors.bg01};
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
  padding: 2rem;
`

const LinksContainer = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  justify-content: space-between;
`

const LinkItem = styled(Link)`
  color: ${colors.white};
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  color: ${colors.white};
  font-size: 2rem;
`

const Icon = styled.img`
  background-color: red;
  max-width: 400px;
  height: 100px;
`

export { Container, LinksContainer, LinkItem, Icon, IconContainer, Title }