import { InputField, Radio, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';

const MenteeApplicationStepTwo = (): ReactElement => {
  return (
    <div>
      <div className='mb-4'>
        <Typography variant='subtitle'>
          Please, share a link to your work samples *
        </Typography>
      </div>
      <InputField placeholder='Link to your work samples' />
      <div className='my-4'>
        <Typography variant='subtitle'>
          On a scale of 1 (beginner) to 5 (expert), how would you rate your
          skills in front-end technologies? *
        </Typography>
      </div>
      <div className='inline-grid grid-flow-row gap-4 medium:grid-flow-col medium:gap-8'>
        <Radio label='1' id='skills-1' name='skills' />
        <Radio label='2' id='skills-2' name='skills' />
        <Radio label='3' id='skills-3' name='skills' />
        <Radio label='4' id='skills-4' name='skills' />
        <Radio label='5' id='skills-5' name='skills' />
      </div>
    </div>
  );
};

export default MenteeApplicationStepTwo;
