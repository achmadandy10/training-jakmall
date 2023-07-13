import { ComponentProps, FC } from 'react';
import { FormContainer } from './Form.elements';

type FormProps = ComponentProps<typeof FormContainer>;

export const Form: FC<FormProps> = ({ children }): JSX.Element => {
  return <FormContainer>{children}</FormContainer>;
};
