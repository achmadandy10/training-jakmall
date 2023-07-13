import { ComponentProps, FC } from 'react';
import { CardButton, CardContainer } from './Card.elements';

type CardComponentProps = ComponentProps<typeof CardContainer>;

export const CardComponent: FC<CardComponentProps> = ({
  children,
}): JSX.Element => {
  return <CardContainer>{children}</CardContainer>;
};

CardComponent.displayName = 'Card';

export const Card = Object.assign(CardComponent, {
  Button: CardButton,
});
