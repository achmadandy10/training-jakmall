import { FC, useEffect, useState } from 'react';
import {
  Breadcrumbs,
  Card,
  Form as FormComponent,
  Summary,
} from '../components';

import { useNavigate, useSearchParams } from 'react-router-dom';

export const Home: FC = (): JSX.Element => {
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
    window.location.reload();
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

  return (
    <Card>
      <Breadcrumbs step={step} />

      <FormComponent>
        <button onClick={handleBackStep}>Back Step</button>

        {stepForm === 1 && <form action="">Delivery Details</form>}

        {stepForm === 2 && <form action="">Shipment</form>}

        {stepForm === 3 && <div>Thank You</div>}

        <button onClick={handleNextStep}>Next Step</button>
      </FormComponent>
      <Summary>
        <Summary.Title>Summary</Summary.Title>
      </Summary>
    </Card>
  );
};
