import { ComponentProps, FC } from 'react';
import {
  SummaryButton,
  SummaryContainer,
  SummaryDetail,
  SummaryItem,
  SummaryItems,
  SummarySubDetail,
  SummaryTitle,
} from './Summary.elements';

type SummaryComponentProps = ComponentProps<typeof SummaryContainer>;

const SummaryComponent: FC<SummaryComponentProps> = ({
  children,
}): JSX.Element => {
  return <SummaryContainer>{children}</SummaryContainer>;
};

SummaryComponent.displayName = 'Summary';

export const Summary = Object.assign(SummaryComponent, {
  Title: SummaryTitle,
  Button: SummaryButton,
  Items: SummaryItems,
  Item: SummaryItem,
  Detail: SummaryDetail,
  SubDetail: SummarySubDetail,
});
