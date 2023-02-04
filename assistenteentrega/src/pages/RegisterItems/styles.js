import styled from "styled-components";
import colors from "../../colors";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 10%;
`

const AddButton = styled.button`
  display: flex;
  padding: 20px 50px;
  margin-left: 10px;
  background-color: ${colors.bg01};
  color: ${colors.white};
  font-weight: bolder;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
`

const RemoveButton = styled.button`
  display: flex;
  padding: 20px 50px;
  margin-left: 10px;
  background-color: red;
  color: ${colors.white};
  font-weight: bolder;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
`

export { 
  Container, 
  Content,
  AddButton,
  RemoveButton,
  ButtonContainer
};