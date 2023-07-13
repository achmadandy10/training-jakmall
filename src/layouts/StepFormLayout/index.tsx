import { ReactNode } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Breadcrumbs, Card, Summary } from '../../components';
import { useStepFormContext } from '../../utils/context/StepFormContext';
import { StepFormLayoutContainer } from './StepFormLayout.elements';

export const StepFormLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const { step, stepForm, handleBackStep, handleNextStep } =
    useStepFormContext();
  return (
    <StepFormLayoutContainer>
      <Card>
        <Breadcrumbs step={step} />

        {stepForm === 3 || (
          <Card.Button onClick={handleBackStep}>
            <MdArrowBack />
            Back to {stepForm === 1 ? 'cart' : 'delivery'}
          </Card.Button>
        )}

        {children}

        <Summary>
          <Summary.Title>Summary</Summary.Title>

          {stepForm === 3 || (
            <Summary.Button onClick={handleNextStep}>
              {stepForm === 1 ? 'Continue to Payment' : 'Pay with e-Wallet'}
            </Summary.Button>
          )}
        </Summary>
      </Card>
    </StepFormLayoutContainer>
  );
};
