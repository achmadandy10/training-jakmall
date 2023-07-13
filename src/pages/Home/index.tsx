import { FC } from 'react';
import { useStepForm } from '../../hooks';
import { StepFormLayout } from '../../layouts';
import { StepFormContext } from '../../utils/';
import { SectionStepFormOne } from './sectionStepFormOne';
import { SectionStepFormThree } from './sectionStepFormThree';
import { SectionStepFormTwo } from './sectionStepFormTwo';

export const Home: FC = (): JSX.Element => {
  const { step, stepForm, handleBackStep, handleNextStep } = useStepForm();
  return (
    <StepFormContext.Provider
      value={{ step, stepForm, handleBackStep, handleNextStep }}
    >
      <StepFormLayout>
        {stepForm === 1 && <SectionStepFormOne />}
        {stepForm === 2 && <SectionStepFormTwo />}
        {stepForm === 3 && <SectionStepFormThree />}
      </StepFormLayout>
    </StepFormContext.Provider>
  );
};
