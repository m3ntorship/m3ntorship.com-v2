import { InputField, Radio, Typography } from 'm3ntorship-ui';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const programs = [
  { id: 'front-end-track', label: 'Front-end track', value: 'front-end' },
  { id: 'back-end-track', label: 'Back-end track', value: 'back-end' },
];

const hours = [
  { id: '20', label: '20', value: '20' },
  { id: '25', label: '25', value: '25' },
  { id: '30', label: '30', value: '30' },
  { id: 'plus-30', label: '+30', value: 'plus-30' },
];

const MenteeApplicationStepOne = (): ReactElement => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className='mb-4'>
        <Typography variant='subtitle'>
          Which program are you interested in? *
        </Typography>
      </div>

      <div className='inline-grid grid-flow-row gap-4 medium:grid-flow-col medium:gap-8'>
        {programs.map((program) => (
          <Controller
            key={program.id}
            name='program'
            control={control}
            render={({ field }) => (
              <Radio
                {...field}
                label={program.label}
                id={program.id}
                value={program.value}
                ref={null}
                checked={getValues('program') === program.value}
              />
            )}
          />
        ))}
      </div>

      {errors['program'] && (
        <Typography variant='body1' className='mt-2 text-error'>
          <>{errors['program']?.message}</>
        </Typography>
      )}

      <div className='my-4'>
        <Typography variant='subtitle'>
          How many hours per week can you dedicate to the program? *
        </Typography>
      </div>

      <div className='inline-grid grid-flow-row gap-4 medium:grid-flow-col medium:gap-8'>
        {hours.map((hour) => (
          <Controller
            key={hour.id}
            name='hours'
            control={control}
            render={({ field }) => (
              <Radio
                {...field}
                label={hour.label}
                id={hour.id}
                value={hour.value}
                ref={null}
                checked={getValues('hours') === hour.value}
              />
            )}
          />
        ))}
      </div>

      {errors['hours'] && (
        <Typography variant='body1' className='mt-2 text-error'>
          <>{errors['hours']?.message}</>
        </Typography>
      )}

      <div className='my-4'>
        <Typography variant='subtitle'>
          Please, tell us about your self and your motivation to apply *
        </Typography>
      </div>

      <Controller
        name='applicantInfo'
        control={control}
        render={({ field }) => (
          <InputField
            multiline
            errorMessage={errors['applicantInfo']?.message}
            placeholder='Start typing'
            {...field}
            ref={null}
          />
        )}
      />
    </div>
  );
};

export default MenteeApplicationStepOne;
