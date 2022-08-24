import { InputField, Radio, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';

const MenteeApplicationStepOne = (): ReactElement => {
  return (
    <div>
      <div className='mb-4'>
        <Typography variant='subtitle'>
          Which program are you interested in? *
        </Typography>
      </div>
      <div className='inline-grid grid-flow-row gap-4 medium:grid-flow-col medium:gap-8'>
        <Radio label='Front-end track' id='front-end-track' name='program' />
        <Radio label='Back-end track' id='back-end-track' name='program' />
      </div>
      <div className='my-4'>
        <Typography variant='subtitle'>
          How many hours per week can you dedicate to the program? *
        </Typography>
      </div>
      <div className='inline-grid grid-flow-row gap-4 medium:grid-flow-col medium:gap-8'>
        <Radio label='20' id='20' name='hours' />
        <Radio label='25' id='25' name='hours' />
        <Radio label='30' id='30' name='hours' />
        <Radio label='+30' id='plus-25' name='hours' />
      </div>

      <div className='my-4'>
        <Typography variant='subtitle'>
          Please, tell us about your self and your motivation to apply *
        </Typography>
      </div>
      <InputField multiline placeholder='Start typing' />
    </div>
  );
};

export default MenteeApplicationStepOne;
