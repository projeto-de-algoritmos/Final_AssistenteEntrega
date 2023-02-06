import styled from "styled-components";
import colors from "../../../../colors";
import Input from "../../../../components/Input";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.div`
  border: none;
  background-color: white;
`

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const Label = styled.label`
  color: ${colors.bg01};
  font-size: 1.0rem;
  font-weight: bold;
  margin-top: 8px;
`

export const InputText = styled(Input)`
  margin-top: 8px;
`

export {
  Container,
  Content,
  Button,
  FormContent,
  Header
}