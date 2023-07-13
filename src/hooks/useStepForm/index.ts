import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useStepForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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
    navigate(`?step=${stepForm - 1}`);
    setStepForm(stepForm - 1);
  };

  const handleNextStep = () => {
    const newStep = [...step];

    newStep[stepForm].isActive = true;

    setStep(newStep);
    navigate(`?step=${stepForm + 1}`);
    setStepForm(stepForm + 1);
  };

  useEffect(() => {
    const viewForm = Number(searchParams.get('step'));

    if (viewForm !== 0) {
      setStepForm(viewForm);

      step.map((_, index: number) => {
        if (viewForm - 1 >= index) {
          const newStep = [...step];

          newStep[index].isActive = true;

          return setStep(newStep);
        }
      });
    }
  }, [searchParams, step]);

  return { step, stepForm, handleBackStep, handleNextStep };
};
