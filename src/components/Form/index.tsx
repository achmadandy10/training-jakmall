import { ComponentProps, FC } from 'react';
import { FormContainer, FormTitle } from './Form.elements';

type FormComponentProps = ComponentProps<typeof FormContainer>;

const FormComponent: FC<FormComponentProps> = ({ children }): JSX.Element => {
  return <FormContainer>{children}</FormContainer>;
};

FormComponent.displayName = 'Form';

export const Form = Object.assign(FormComponent, {
  Title: FormTitle,
});
