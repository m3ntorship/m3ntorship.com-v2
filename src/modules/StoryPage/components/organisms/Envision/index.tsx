import { Typography } from 'm3ntorship-ui';
import vision from 'public/images/story-page/vision.png';
import { ReactElement } from 'react';

import { NextImage } from '@/shared/components/atoms';
import { SCREENS } from '@/shared/constants';
import useWindowSize from '@/shared/hooks/windowSize';

const singlePillar = {
  id: '1',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
};

const pillars: typeof singlePillar[] = Array(4)
  .fill(singlePillar)
  .map((pillar: typeof singlePillar, index) => ({
    ...pillar,
    id: `${index + 1}`,
  }));

export default function Envision(): ReactElement {
  const isMDScreen = useWindowSize(`(min-width: ${SCREENS.MD}px)`);
  const isLGScreen = useWindowSize(`(min-width: ${SCREENS.LG}px)`);

  return (
    <section className='flex flex-col gap-x-24 gap-y-12 large:flex-row'>
      <div className='flex flex-col items-center gap-12'>
        <Typography
          variant={isMDScreen ? 'h1' : 'h3'}
          className='max-w-148 text-primary-text'
          align={isLGScreen ? 'start' : 'center'}
        >
          How we envision Mentorship
        </Typography>
        <div className='relative h-full w-full overflow-hidden rounded-lrg'>
          <NextImage
            alt='vision'
            src={vision}
            layout='fill'
            objectFit='cover'
            className='h-50 w-full'
          />
        </div>
      </div>

      <ul className='grid grid-cols-1 gap-8 medium:grid-cols-2'>
        {pillars.map((pillar) => (
          <Pillar key={pillar.id} pillar={pillar} />
        ))}
      </ul>
    </section>
  );
}

function Pillar({ pillar }: { pillar: typeof singlePillar }): ReactElement {
  return (
    <li className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <NextImage
          alt={`pillar ${pillar.id}`}
          src={`/images/story-page/pillar-${pillar.id}.png`}
          layout='responsive'
          width={64}
          height={64}
        />
        <Typography variant='h6' className='text-primary-text'>
          Pillar {pillar.id}
        </Typography>
      </div>
      <Typography variant='body1' className='text-primary-text large:max-w-70'>
        {pillar.description}
      </Typography>
    </li>
  );
}
