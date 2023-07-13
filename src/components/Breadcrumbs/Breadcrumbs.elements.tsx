import { MdChevronRight } from 'react-icons/md';
import styled from 'styled-components';

export const BreadcrumbsContainer = styled.div`
  background: var(--body-color);
  width: 500px;
  height: 70px;
  border-radius: var(--rounded-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-shrink: 0;
  position: absolute;
  top: -35px;
  left: 0;
  right: 0;
  margin: auto;
`;

interface BreadcrumbsStepProps {
  isActive: boolean;
}

export const BreadcrumbsStep = styled.div<BreadcrumbsStepProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  & h1 {
    width: 30px;
    height: 30px;
    flex-shrink: 0;

    border-radius: 15px;
    background: ${p =>
      p.isActive ? '#ff8a00' : 'var(--orange-opacity-color)'};
    box-shadow: 0px 2px 4px 0px rgba(255, 138, 0, 0.3);

    color: ${p => (p.isActive ? '#fff' : 'var(--orange-color)')};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & span {
    color: #ff8a00;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const BreadcrumbsChevron = styled(MdChevronRight)`
  color: var(--orange-color);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
