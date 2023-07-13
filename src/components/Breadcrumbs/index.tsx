import { FC, Fragment } from 'react';
import {
  BreadcrumbsChevron,
  BreadcrumbsContainer,
  BreadcrumbsStep,
} from './Breadcrumbs.elements';

interface StepEntity {
  label: string;
  isActive: boolean;
}

interface BreadcrumbsProps {
  step: StepEntity[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ step }): JSX.Element => {
  return (
    <BreadcrumbsContainer>
      {step.map(({ label, isActive }, index: number) => {
        return (
          <Fragment key={index}>
            <BreadcrumbsStep isActive={isActive}>
              <h1>{index + 1}</h1> <span>{label}</span>
            </BreadcrumbsStep>

            {index === step.length - 1 || <BreadcrumbsChevron />}
          </Fragment>
        );
      })}
    </BreadcrumbsContainer>
  );
};
