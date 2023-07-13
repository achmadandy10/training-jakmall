import styled from 'styled-components';

export const SummaryContainer = styled.div`
  border-left: 1px solid var(--orange-color);
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SummaryTitle = styled.h1`
  color: var(--orange-color);
  font-size: var(--h1-font-size);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: normal;
`;

export const SummaryButton = styled.button`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: var(--orange-color);
  color: var(--white-color);
  text-align: center;
  font-size: var(--h2-font-size);
  font-style: normal;
  font-weight: var(--font-medium);
  line-height: normal;
`;
