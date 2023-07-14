import { FC } from 'react';
import { useData, useStepForm } from '../../hooks';
import { StepFormLayout } from '../../layouts';
import { StepFormContext } from '../../utils/';
import { DataContext } from '../../utils/context/DataContext';
import { SectionStepFormOne } from './sectionStepFormOne';
import { SectionStepFormThree } from './sectionStepFormThree';
import { SectionStepFormTwo } from './sectionStepFormTwo';

export const Home: FC = (): JSX.Element => {
  const { step, stepForm, handleBackStep, handleNextStep } = useStepForm();
  const {
    data,
    setData,
    shipment,
    setShipment,
    payment,
    setPayment,
    cart,
    dropshipFee,
  } = useData();
  return (
    <StepFormContext.Provider
      value={{ step, stepForm, handleBackStep, handleNextStep }}
    >
      <DataContext.Provider
        value={{
          data,
          setData,
          shipment,
          setShipment,
          payment,
          setPayment,
          cart,
          dropshipFee,
        }}
      >
        <StepFormLayout>
          {stepForm === 1 && <SectionStepFormOne />}
          {stepForm === 2 && <SectionStepFormTwo />}
          {stepForm === 3 && <SectionStepFormThree />}
        </StepFormLayout>
      </DataContext.Provider>
    </StepFormContext.Provider>
  );
};
