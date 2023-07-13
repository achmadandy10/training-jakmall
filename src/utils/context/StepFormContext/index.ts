import { createContext, useContext } from 'react';
import { StepInterface } from '../../../interfaces';

export type StepFormContextProps = {
  step: StepInterface[];
  stepForm: number;
  handleBackStep: () => void;
  handleNextStep: () => void;
};

export const StepFormContext = createContext<StepFormContextProps | undefined>(
  undefined,
);

export function useStepFormContext(): StepFormContextProps {
  const context = useContext(StepFormContext);

  if (!context) {
    throw new Error(
      'useStepFormContext should be used within the StepFormContext provider!',
    );
  }

  return context;
}
