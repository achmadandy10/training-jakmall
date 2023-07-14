import { ComponentProps, FC } from 'react';
import {
  FormInputContainer,
  FormInputLabel,
  Input,
} from './FormInput.elements';
import { FormInputTextarea } from './FormInputTextarea';

type FormInputComponentProps = ComponentProps<typeof Input> & {
  label: string;
};

export const FormInputComponent: FC<FormInputComponentProps> = ({
  label,
  ...props
}): JSX.Element => {
  return (
    <FormInputContainer>
      <Input placeholder=" " {...props} />
      <FormInputLabel>{label}</FormInputLabel>
    </FormInputContainer>
  );
};

FormInputComponent.displayName = 'FormInput';

export const FormInput = Object.assign(FormInputComponent, {
  Textarea: FormInputTextarea,
});
