import { ReactElement, ReactNode } from 'react';

interface ProgramCardProps {
  image?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
}

export default function ProgramCard(props: ProgramCardProps): ReactElement {
  return (
    <div className='grid items-stretch rounded-lrg bg-white p-lrg shadow-shd-1 small:grid-cols-1 small:gap-med small:text-center  medium:grid-cols-3 large:gap-lrg'>
      <div>{props.image}</div>
      <div className='flex flex-col justify-between small:text-center medium:col-span-2 medium:text-left'>
        <div className='small:mb-lrg medium:mb-med'>
          <div className='mb-xs'>{props.title}</div>
          <div>{props.description}</div>
        </div>
        <div>{props.button}</div>
      </div>
    </div>
  );
}
