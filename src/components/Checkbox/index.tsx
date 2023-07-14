import { ComponentProps, FC } from 'react';
import {
  CheckboxContainer,
  CheckboxLabel,
  CustomInputCheckbox,
  CustomInputCheckboxChecked,
  InputCheckbox,
} from './Checkbox.elements';

type CheckboxComponentProps = ComponentProps<typeof InputCheckbox> & {
  label: string;
};

const CheckboxComponent: FC<CheckboxComponentProps> = ({
  label,
  ...props
}): JSX.Element => {
  return (
    <CheckboxContainer>
      <CustomInputCheckbox>
        <InputCheckbox type={'checkbox'} {...props} />
        <CustomInputCheckboxChecked />
      </CustomInputCheckbox>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

CheckboxComponent.displayName = 'Checkbox';

export const Checkbox = Object.assign(CheckboxComponent, {});
