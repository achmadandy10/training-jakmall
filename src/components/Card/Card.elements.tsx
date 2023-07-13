import styled from 'styled-components';

export const CardContainer = styled.div`
  background: var(--white-color);
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: var(--bs-orange);
  border-radius: 4px;
  padding: 72px 20px 20px 40px;
  display: grid;
  grid-template-columns: auto 300px;
`;

export const CardButton = styled.button`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: var(--font-medium);
  line-height: normal;
  background: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  top: 30px;
  left: 40px;

  & svg {
    width: 18px;
    height: 18px;
  }
`;
