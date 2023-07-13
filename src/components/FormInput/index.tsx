import { ComponentProps, FC } from 'react';
import {
  FormInputContainer,
  FormInputLabel,
  Input,
} from './FormInput.elements';

type FormInputProps = ComponentProps<typeof Input> & {
  label: string;
};

export const FormInput: FC<FormInputProps> = ({
  label,
  ...props
}): JSX.Element => {
  return (
    <FormInputContainer>
      <Input {...props} />
      <FormInputLabel>{label}</FormInputLabel>
    </FormInputContainer>
  );
};
