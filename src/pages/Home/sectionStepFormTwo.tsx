import { FC } from 'react';
import { Form, RadioButton } from '../../components';
import { useData } from '../../hooks';
import { NumberFormat } from '../../utils';

export const SectionStepFormTwo: FC = (): JSX.Element => {
  const { shipment, payment } = useData();

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
          {shipment.map(({ id, name, price }) => {
            return (
              <RadioButton
                key={id}
                name={'shipment'}
                title={name}
                subtitle={`${NumberFormat(price)}`}
              />
            );
          })}
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
          {payment.map(({ id, name, saldo }) => {
            return (
              <RadioButton
                key={id}
                name={'payment'}
                title={name}
                subtitle={`${saldo ? NumberFormat(saldo) + ' left' : ''}`}
              />
            );
          })}
        </div>
      </div>
    </Form>
  );
};
