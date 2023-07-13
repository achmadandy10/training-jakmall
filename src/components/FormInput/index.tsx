import { ComponentProps, FC } from 'react';
import { FormInputContainer } from './FormInput.elements';

type FormInputProps = ComponentProps<typeof FormInputContainer>;

export const FormInput: FC<FormInputProps> = ({ children }): JSX.Element => {
  return <FormInputContainer>{children}</FormInputContainer>;
};
