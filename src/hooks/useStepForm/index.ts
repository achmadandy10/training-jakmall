import { useState } from 'react';

export const useStepForm = () => {
  const [stepForm, setStepForm] = useState<number>(1);
  const [step, setStep] = useState([
    {
      label: 'Delivery',
      isActive: true,
    },
    {
      label: 'Payment',
      isActive: false,
    },
    {
      label: 'Finish',
      isActive: false,
    },
  ]);

  const handleBackStep = () => {
    const newStep = [...step];

    newStep[stepForm - 1].isActive = false;

    setStep(newStep);
    setStepForm(stepForm - 1);
  };

  const handleNextStep = () => {
    const newStep = [...step];

    newStep[stepForm].isActive = true;

    setStep(newStep);
    setStepForm(stepForm + 1);
  };

  return { step, stepForm, handleBackStep, handleNextStep };
};
