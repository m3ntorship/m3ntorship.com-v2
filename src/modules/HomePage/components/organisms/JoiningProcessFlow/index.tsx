import { Typography } from 'm3ntorship-ui';
import type { FC, ReactElement } from 'react';

import styles from './JoiningProcessFlow.module.css';

import { ProcessCard } from '@/modules/HomePage/components/molecules';

const processSteps = [
  {
    title: 'Apply to a program',
    description:
      'Prepare some of your work examples and apply to your preferred program',
    order: 1,
  },
  {
    title: 'Work on a real project',
    description:
      'Once you get accepted, you will work on real projects along with other mentees',
    order: 2,
  },
  {
    title: 'Graduate & give back',
    description:
      'Graduate and give back to the community by mentoring new batches',
    order: 3,
  },
];
const JoiningProcessFlow: FC = (): ReactElement => {
  return (
    <section>
      <div className='flex flex-col gap-xs'>
        <Typography className={styles.card_title} align='center' variant='h1'>
          How the process works
        </Typography>
        <Typography align='center' variant='subtitle'>
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo.
        </Typography>
      </div>
      <div className='grid gap-med pt-xxxxl small:grid-cols-1 small:gap-x-med large:grid-cols-3 large:gap-xl'>
        {processSteps.map(({ description, title, order }, index) => {
          return (
            <ProcessCard
              key={index}
              title={title}
              description={description}
              order={order}
            />
          );
        })}
      </div>
    </section>
  );
};

export default JoiningProcessFlow;
