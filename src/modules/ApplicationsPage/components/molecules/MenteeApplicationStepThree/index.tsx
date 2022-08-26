import { InputField, SelectInput, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

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
    value: 'friend',
  },
  {
    label: 'From Facebook',
    value: 'facebook',
  },
  {
    label: 'From Twitter',
    value: 'twitter',
  },
  {
    label: 'From Linkedin',
    value: 'linkedin',
  },
  {
    label: 'From Youtube',
    value: 'youtube',
  },
  {
    label: 'Other Option',
    value: 'other',
  },
];

const MenteeApplicationStepThree = (): ReactElement => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className='mb-4'>
        <Typography variant='subtitle'>
          What is your current occupation? *
        </Typography>
      </div>

      <Controller
        name='occupation'
        control={control}
        render={({ field }) => (
          <SelectInput
            placeholder='choose'
            options={occupationOptions}
            {...field}
            ref={null}
          />
        )}
      />

      {errors['occupation'] && (
        <Typography variant='body1' className='mt-2 text-error'>
          <>{errors['occupation']?.message}</>
        </Typography>
      )}

      <div className='my-4'>
        <Typography variant='subtitle'>What is your name? *</Typography>
      </div>

      <Controller
        name='applicantName'
        control={control}
        render={({ field }) => (
          <InputField
            placeholder='Enter name'
            {...field}
            ref={null}
            errorMessage={errors['applicantName']?.message}
          />
        )}
      />

      <div className='my-4'>
        <Typography variant='subtitle'>
          What is your email address? *
        </Typography>
      </div>

      <Controller
        name='applicantEmail'
        control={control}
        render={({ field }) => (
          <InputField
            placeholder='Enter email'
            {...field}
            ref={null}
            errorMessage={errors['applicantEmail']?.message}
          />
        )}
      />

      <div className='my-4'>
        <Typography variant='subtitle'>
          How did you hear about mentorship? *
        </Typography>
      </div>

      <Controller
        name='applicantResource'
        control={control}
        render={({ field }) => (
          <SelectInput
            placeholder='choose'
            options={howDidYouHearQuestionOptions}
            {...field}
            ref={null}
          />
        )}
      />

      {errors['applicantResource'] && (
        <Typography variant='body1' className='mt-2 text-error'>
          <>{errors['applicantResource']?.message}</>
        </Typography>
      )}
    </div>
  );
};

export default MenteeApplicationStepThree;
