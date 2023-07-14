import { FC } from 'react';
import { Form, RadioButton } from '../../components';

export const SectionStepFormTwo: FC = (): JSX.Element => {
  return (
    <Form>
      <div>
        <Form.Title>Shipment</Form.Title>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            rowGap: '10px',
            columnGap: '10px',
            marginTop: '30px',
            marginBottom: '60px',
          }}
        >
          <RadioButton
            name={'shipment'}
            title={'GO-SEND'}
            subtitle={'15,000'}
          />
          <RadioButton name={'shipment'} title={'JNE'} subtitle={'9,000'} />
          <RadioButton
            name={'shipment'}
            title={'Personal Courier'}
            subtitle={'29,000'}
          />
        </div>
      </div>
      <div>
        <Form.Title>Payment</Form.Title>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            rowGap: '10px',
            columnGap: '10px',
            marginTop: '30px',
          }}
        >
          <RadioButton
            name={'payment'}
            title={'e-Wallet'}
            subtitle={'1,500,000 left'}
          />
          <RadioButton name={'payment'} subtitle={'Bank Transfer'} />
          <RadioButton name={'payment'} subtitle={'Virtual Account'} />
        </div>
      </div>
    </Form>
  );
};
