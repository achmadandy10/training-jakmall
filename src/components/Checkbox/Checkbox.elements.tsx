import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const CustomInputCheckbox = styled.label`
  position: relative;
  width: 20px;
  height: 20px;
`;

export const CustomInputCheckboxChecked = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid var(--dark-gray-color);
  background: #fff;
  cursor: pointer;
  transition: all 300ms ease;

  &::after {
    content: '';
    position: absolute;
    left: 6px;
    bottom: 4px;
    width: 3px;
    height: 8px;
    border: solid #1bd97b;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
`;

export const InputCheckbox = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;

  &:checked ~ span {
    border: 2px solid #1bd97b;
  }

  &:checked ~ span::after {
    opacity: 1;
  }
`;

export const CheckboxLabel = styled.label`
  color: #2d2a40;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
