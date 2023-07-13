import { FC } from 'react';
import { Form, FormInput } from '../../components';

export const SectionStepFormOne: FC = (): JSX.Element => {
  return (
    <Form>
      <Form.Title>Delivery details</Form.Title>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '36px',
        }}
      >
        <FormInput label={'Email'} />
        <FormInput label={'Dropshipper name'} />
        <FormInput label={'Phone Number'} />
        <FormInput label={'Dropshipper phone number'} />
      </div>
    </Form>
  );
};
