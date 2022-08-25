import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

interface ApplicaitonsTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  active?: boolean;
}

const ApplicationsTab = ({
  children,
  active,
  ...props
}: ApplicaitonsTabProps): ReactElement => {
  const buttonClasses = clsx('flex items-center justify-center px-14 py-4', {
    'border-thick border-success rounded-lrg': active,
    'border-thick border-transparent': !active,
  });

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default ApplicationsTab;
