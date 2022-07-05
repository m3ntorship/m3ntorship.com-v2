import { Typography } from 'm3ntorship-ui';
import type { ReactElement } from 'react';

const values = [
  {
    id: '1',
    title: 'Title one',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
  },
  {
    id: '2',
    title: 'Title one',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
  },
  {
    id: '3',
    title: 'Title one',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
  },
];

export default function ValueSection(): ReactElement {
  return (
    <section className='relative flex justify-end pb-xxxxl'>
      <div className='absolute left-0 translate-y-1/2 overflow-hidden rounded-lrg bg-white-800 px-xl py-7 backdrop-blur-3xl'>
        <Typography variant='h4' className='text-dark w-106'>
          Semper feugiat nibh sed pulvinar
        </Typography>
      </div>
      <div className='rounded-lrg bg-secondary py-22 pr-12 pl-56'>
        <ul className='flex space-x-med'>
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
    <li className='flex flex-col items-start'>
      <Typography variant='h6' color='white' className='mb-xs text-white'>
        {value.title}
      </Typography>
      <Typography variant='body2' className='w-50 text-white'>
        {value.description}
      </Typography>
    </li>
  );
}
