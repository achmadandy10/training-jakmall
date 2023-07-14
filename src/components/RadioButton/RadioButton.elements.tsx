import { MdCheck } from 'react-icons/md';
import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
  position: relative;
  height: 60px;
  flex-shrink: 0;
`;

export const Radio = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;

  &:checked + div {
    background: var(--green-opacity-color);
    border: 1px solid var(--green-color);
  }

  &:checked + div svg {
    opacity: 1;
  }
`;

export const RadioButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background: #fff;
  padding: 12px 15px;
  transition: all 300ms ease;
  position: relative;
`;

export const RadioButtonTitle = styled.h1`
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: var(--font-medium);
  line-height: normal;
`;

export const RadioButtonSubtitle = styled.h2`
  color: #2d2a40;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RadioButtonCheck = styled(MdCheck)`
  position: absolute;
  top: 20px;
  right: 15px;
  color: #1bd97b;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0;
  transition: all 300ms ease;
`;
