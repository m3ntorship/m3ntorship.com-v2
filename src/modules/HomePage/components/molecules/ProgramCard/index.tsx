import { ReactElement, ReactNode } from 'react';

interface ProgramCardProps {
  Image?: ReactNode;
  Title: ReactNode;
  Description: ReactNode;
  Button: ReactNode;
}

export default function ProgramCard(props: ProgramCardProps): ReactElement {
  return (
    <div className='grid items-stretch rounded-lrg bg-white p-lrg shadow-shd-1 small:grid-cols-1 small:gap-med small:text-center  medium:grid-cols-3 large:gap-lrg'>
      <div>{props.Image}</div>
      <div className='flex flex-col justify-between small:text-center medium:col-span-2 medium:text-left'>
        <div className='small:mb-lrg medium:mb-med'>
          <div className='mb-xs'>{props.Title}</div>
          <div>{props.Description}</div>
        </div>
        <div>{props.Button}</div>
      </div>
    </div>
  );
}
