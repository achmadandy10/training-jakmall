import { FC } from 'react';
import { Checkbox, Form, FormInput } from '../../components';

export const SectionStepFormOne: FC = (): JSX.Element => {
  return (
    <Form>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Form.Title>Delivery details</Form.Title>

        <Checkbox label={'Send as dropshipper'} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          rowGap: '10px',
          columnGap: '30px',
          marginTop: '36px',
        }}
      >
        <FormInput label={'Email'} />
        <FormInput label={'Dropshipper name'} />
        <FormInput label={'Phone Number'} />
        <FormInput label={'Dropshipper phone number'} />
        <FormInput.Textarea label={'Delivery Address'} />
      </div>
    </Form>
  );
};
