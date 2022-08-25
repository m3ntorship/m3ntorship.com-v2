import { InputField, SelectInput, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';

const occupationOptions = [
  {
    label: 'Student',
    value: 'student',
  },
  {
    label: 'Full Time',
    value: 'full-time',
  },
  {
    label: 'Unemployed',
    value: 'unemployed',
  },
];

const howDidYouHearQuestionOptions = [
  {
    label: 'From a Friend',
    value: 'from-a-friend',
  },
  {
    label: 'From social media',
    value: 'from-social-media',
  },
];

const MenteeApplicationStepThree = (): ReactElement => {
  return (
    <div>
      <div className='mb-4'>
        <Typography variant='subtitle'>
          What is your current occupation? *
        </Typography>
      </div>
      <SelectInput placeholder='choose' options={occupationOptions} />
      <div className='my-4'>
        <Typography variant='subtitle'>What is your name? *</Typography>
      </div>
      <InputField placeholder='Enter name' />
      <div className='my-4'>
        <Typography variant='subtitle'>
          What is your email address? *
        </Typography>
      </div>
      <InputField placeholder='Enter email' />
      <div className='my-4'>
        <Typography variant='subtitle'>
          How did you hear about mentorship? *
        </Typography>
      </div>
      <SelectInput
        placeholder='choose'
        options={howDidYouHearQuestionOptions}
      />
    </div>
  );
};

export default MenteeApplicationStepThree;
