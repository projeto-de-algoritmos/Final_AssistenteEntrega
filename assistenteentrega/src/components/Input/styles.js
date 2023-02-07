import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${colors.bg01};
  font-size: 1.5rem;
  font-weight: bold;
`

export const InputText = styled.input`
  border-radius: 0.4rem;
  padding: 0.2rem;
  border: 1px solid ${colors.bg01};
  background-color: ${colors.white};
`
