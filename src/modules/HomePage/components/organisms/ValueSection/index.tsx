import { Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';

import styles from './valueSection.module.css';

const values = [
  {
    id: '1',
    title: 'Title one',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
  },
  {
    id: '2',
    title: 'Title two',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
  },
  {
    id: '3',
    title: 'Title three',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
  },
];

export default function ValueSection(): ReactElement {
  return (
    <section className={styles['value-section-wrapper']}>
      <div className={styles['left-box']}>
        <Typography variant='h4' className='text-dark medium:max-w-106'>
          Semper feugiat nibh sed pulvinar
        </Typography>
      </div>
      <div className={styles['right-box']}>
        <ul className={styles['values-wrapper']}>
          {values.map((value) => (
            <Value key={value.id} value={value} />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface ValueProps {
  value: {
    id: string;
    title: string;
    description: string;
  };
}

function Value({ value }: ValueProps): ReactElement {
  return (
    <li className={styles['value-item']}>
      <Typography
        variant='h6'
        color='white'
        className='white mb-xs whitespace-nowrap text-white'
      >
        {value.title}
      </Typography>
      <Typography variant='body2' className='text-white large:max-w-50'>
        {value.description}
      </Typography>
    </li>
  );
}
