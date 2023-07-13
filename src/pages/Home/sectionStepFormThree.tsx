import { FC } from 'react';
import { Form } from '../../components';

export const SectionStepFormThree: FC = (): JSX.Element => {
  return (
    <Form>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Form.Title>Thank You</Form.Title>
      </div>
    </Form>
  );
};
