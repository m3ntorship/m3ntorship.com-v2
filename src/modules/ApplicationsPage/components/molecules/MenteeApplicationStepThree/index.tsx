import { InputField, SelectInput, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  howDidYouHearQuestionOptions,
  occupationOptions,
} from '@/modules/ApplicationsPage/components/organisms/MenteeApplication/utils';

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
            errorMessage={errors['occupation']?.message}
            error={Boolean(errors['occupation'])}
            {...field}
            ref={null}
          />
        )}
      />

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
            error={Boolean(errors['applicantName'])}
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
            error={Boolean(errors['applicantEmail'])}
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
            errorMessage={errors['applicantResource']?.message}
            error={Boolean(errors['applicantResource'])}
            {...field}
            ref={null}
          />
        )}
      />
    </div>
  );
};

export default MenteeApplicationStepThree;
