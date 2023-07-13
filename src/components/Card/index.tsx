import { ComponentProps, FC } from 'react';
import { CardContainer } from './Card.elements';

type CardProps = ComponentProps<typeof CardContainer>;

export const Card: FC<CardProps> = ({ children }): JSX.Element => {
  return <CardContainer>{children}</CardContainer>;
};
