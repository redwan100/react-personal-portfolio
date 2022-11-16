import React from 'react';
import styled from 'styled-components';

const Para = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-clr);
  text-align: justify;
`;
function Ptext({ text = 'text' }) {
  return <Para className='para'>{text}</Para>;
}

export default Ptext;
