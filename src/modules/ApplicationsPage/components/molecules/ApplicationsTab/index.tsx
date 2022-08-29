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
  const buttonClasses = clsx(
    'flex items-center justify-center py-4 px-2 rounded-lrg w-full',
    {
      'border-thick border-success rounded-lrg': active,
      'border-thick border-transparent bg-background': !active,
    }
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default ApplicationsTab;
