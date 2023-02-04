import styled from 'styled-components';
import Masked from 'react-text-mask'
import colors from '../../colors';

export const MaskedInput = styled(Masked)`
  border-radius: 0.4rem;
  padding: 0.2rem;
  border: 1px solid ${colors.bg01};
  background-color: ${colors.white};
`;
