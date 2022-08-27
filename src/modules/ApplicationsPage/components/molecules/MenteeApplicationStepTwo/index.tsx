import { InputField, Radio, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { skills } from '@/modules/ApplicationsPage/components/organisms/MenteeApplication/utils';

const MenteeApplicationStepTwo = (): ReactElement => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className='mb-4'>
        <Typography variant='subtitle'>
          Please, share a link to your work samples *
        </Typography>
      </div>

      <Controller
        name='applicantPortfolio'
        control={control}
        render={({ field }) => (
          <InputField
            placeholder='Link to your work samples'
            errorMessage={errors['applicantPortfolio']?.message}
            error={Boolean(errors['applicantPortfolio'])}
            {...field}
            ref={null}
          />
        )}
      />

      <div className='my-4'>
        <Typography variant='subtitle'>
          On a scale of 1 (beginner) to 5 (expert), how would you rate your
          skills in front-end technologies? *
        </Typography>
      </div>

      <div className='inline-grid grid-flow-row gap-4 medium:grid-flow-col medium:gap-8'>
        {skills.map((skill) => (
          <Controller
            key={skill.id}
            name='skills'
            control={control}
            render={({ field }) => (
              <Radio
                {...field}
                label={skill.label}
                id={skill.id}
                value={skill.value}
                ref={null}
                checked={getValues('skills') === skill.value}
              />
            )}
          />
        ))}
      </div>

      {errors['skills'] && (
        <Typography variant='body1' className='mt-2 text-error'>
          <>{errors['skills']?.message}</>
        </Typography>
      )}
    </div>
  );
};

export default MenteeApplicationStepTwo;
