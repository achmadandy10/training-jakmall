import styled from 'styled-components';

export const FormContainer = styled.div``;

export const FormTitle = styled.h1`
  color: var(--orange-color);
  font-size: var(--big-font-size);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: normal;
  position: relative;
  display: inline-block;
  z-index: 10;

  &::before {
    content: ' ';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 8px;
    background: var(--gray-color);
    bottom: 5px;
  }
`;
