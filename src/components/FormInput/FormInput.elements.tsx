import styled from 'styled-components';

export const FormInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 25px 15px 10px 15px;
  outline-color: transparent;
  border: 2px solid #cccccc;
  color: #000;
  font-size: var(--normal-font-size);
  font-style: normal;
  font-weight: var(--font-medium);
  line-height: normal;

  &:focus {
    border: 2px solid #000;
  }

  &:not(:placeholder-shown) {
    border: 2px solid #000;
    font-weight: 600;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    color: #000;
    transform: translateY(-12px);
    font-size: var(--small-font-size);
  }
`;

export const FormInputLabel = styled.label`
  position: absolute;
  left: 0;
  padding: 20px 15px;
  pointer-events: none;
  transition: 0.6s;
  color: #cccccc;
  font-size: var(--normal-font-size);
  font-style: normal;
  font-weight: var(--font-medium);
  line-height: normal;
`;
