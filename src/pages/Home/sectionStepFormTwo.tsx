import { FC } from 'react';
import { Form } from '../../components';

export const SectionStepFormTwo: FC = (): JSX.Element => {
  return (
    <Form>
      <div>
        <Form.Title>Shipment</Form.Title>
      </div>
      <div>
        <Form.Title>Payment</Form.Title>
      </div>
    </Form>
  );
};
