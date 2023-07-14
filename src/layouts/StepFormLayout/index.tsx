import { ReactNode } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Breadcrumbs, Card, Summary } from '../../components';
import { useDataContext } from '../../utils/context/DataContext';
import { useStepFormContext } from '../../utils/context/StepFormContext';
import { StepFormLayoutContainer } from './StepFormLayout.elements';

export const StepFormLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const { step, stepForm, handleBackStep, handleNextStep } =
    useStepFormContext();

  const { cart, dropshipFee, data } = useDataContext();

  return (
    <StepFormLayoutContainer>
      <Card>
        <Breadcrumbs step={step} />

        {stepForm === 3 || (
          <Card.Button
            disabled={stepForm === 1 ? true : false}
            onClick={handleBackStep}
          >
            <MdArrowBack />
            Back to {stepForm === 1 ? 'cart' : 'delivery'}
          </Card.Button>
        )}

        {children}

        <Summary>
          <div>
            <Summary.Title>Summary</Summary.Title>

            <Summary.Items
              style={{
                marginTop: '10px',
              }}
            >
              <Summary.Item>
                <Summary.Detail>{cart.length} items purchased</Summary.Detail>
              </Summary.Item>
            </Summary.Items>
          </div>

          <div>
            <Summary.Items
              style={{
                marginBottom: '25px',
              }}
            >
              <Summary.Item>
                <Summary.Detail>Cost of goods</Summary.Detail>
                <Summary.SubDetail>
                  {cart.reduce((n, { price }) => n + price, 0)}
                </Summary.SubDetail>
              </Summary.Item>
              {data.isDropship && (
                <Summary.Item>
                  <Summary.Detail>Dropshipping Fee</Summary.Detail>
                  <Summary.SubDetail>{dropshipFee?.fee}</Summary.SubDetail>
                </Summary.Item>
              )}
            </Summary.Items>

            {stepForm === 3 || (
              <Summary.Button onClick={handleNextStep}>
                {stepForm === 1 ? 'Continue to Payment' : 'Pay with e-Wallet'}
              </Summary.Button>
            )}
          </div>
        </Summary>
      </Card>
    </StepFormLayoutContainer>
  );
};
