import { ComponentProps, FC } from 'react';
import {
  FormInputTeaxtareaLabel,
  FormInputTextareaContainer,
  Textarea,
} from './FormInputTextarea.elements';

type FormInputTextareaProps = ComponentProps<typeof Textarea> & {
  label: string;
};

export const FormInputTextarea: FC<FormInputTextareaProps> = ({
  label,
  ...props
}): JSX.Element => {
  return (
    <FormInputTextareaContainer>
      <Textarea placeholder=" " {...props} />

      <FormInputTeaxtareaLabel>{label}</FormInputTeaxtareaLabel>
    </FormInputTextareaContainer>
  );
};
