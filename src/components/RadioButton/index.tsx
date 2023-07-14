import { ComponentProps, FC } from 'react';
import {
  Radio,
  RadioButtonCheck,
  RadioButtonContainer,
  RadioButtonContent,
  RadioButtonSubtitle,
  RadioButtonTitle,
} from './RadioButton.elements';

type RadioButtonComponentProps = ComponentProps<typeof Radio> & {
  title?: string;
  subtitle?: string | number | undefined;
};

const RadioButtonComponent: FC<RadioButtonComponentProps> = ({
  title,
  subtitle,
  ...props
}): JSX.Element => {
  return (
    <RadioButtonContainer>
      <Radio type={'radio'} {...props} />
      <RadioButtonContent>
        <RadioButtonTitle>{title}</RadioButtonTitle>
        <RadioButtonSubtitle>{subtitle}</RadioButtonSubtitle>
        <RadioButtonCheck />
      </RadioButtonContent>
    </RadioButtonContainer>
  );
};

RadioButtonComponent.displayName = 'RadioButton';

export const RadioButton = Object.assign(RadioButtonComponent, {});
