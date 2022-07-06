import { Typography } from 'm3ntorship-ui';
import type { FC, ReactElement } from 'react';

import styles from './ProcessCard.module.css';

import { IProcessCard } from '@/modules/HomePage/components/JoiningProcessFlow/ProcessCard/IPorcessCard.d';

const ProcessCard: FC<IProcessCard.IProps> = ({
  title,
  description,
  order,
}): ReactElement => {
  return (
    <div className='flex border-spacing-xs items-center bg-background-surface p-lrg shadow-shd-1'>
      <div className='flex items-stretch gap-lrg'>
        <div className='rounded-med bg-secondary p-sm'>
          <Typography
            className='text-white'
            align='center'
            component='p'
            variant='body1'
          >
            {order}
          </Typography>
        </div>
        <div className='flex flex-col gap-xs'>
          <span className={styles.title_wrapper}>
            <Typography align='left' variant='h6' component='h3'>
              {title}
            </Typography>
          </span>
          <Typography align='left' component='p' variant='body2'>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default ProcessCard;
