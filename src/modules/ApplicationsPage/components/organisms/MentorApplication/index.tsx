import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  InputField,
  Radio,
  SelectInput,
  Typography,
} from 'm3ntorship-ui';
import Submit from 'public/images/applications-page/submit.svg';
import { Dispatch, ReactElement, SetStateAction } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';

import { SCREENS } from '@/shared/constants';
import useMedia from '@/shared/hooks/windowSize';

import {
  hours,
  mentorApplicationSchema,
  mentorDomains,
  occupationOptions,
} from './utils';

interface MentorApplicationProps {
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}

const MentorApplication = ({
  setShowSuccess,
}: MentorApplicationProps): ReactElement => {
  const matched = useMedia(`(max-width: ${SCREENS.MD}px)`);

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(mentorApplicationSchema),
    defaultValues: {
      mentorDomains: mentorDomains,
      hours: '',
      mentorEmail: '',
      mentorInfo: '',
      mentorLinkedin: '',
      mentorName: '',
      occupation: '',
    },
  });
  const { fields } = useFieldArray({
    control,
    name: 'mentorDomains',
  });

  const handleMentorApplication: SubmitHandler<FieldValues> = (data) => {
    setShowSuccess(true);
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form
      className='mt-12 w-full'
      onSubmit={handleSubmit(handleMentorApplication)}
    >
      <div>
        <div className='mb-4'>
          <Typography variant='subtitle'>
            What are your expertise areas?
          </Typography>
        </div>

        <div className='inline-grid grid-flow-row gap-4'>
          {fields.map((domain, index) => (
            <Controller
              key={domain.id}
              name={`mentorDomains.${index}.value`}
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  id={domain.id}
                  label={domain.label}
                  value={domain.value}
                  ref={null}
                />
              )}
            />
          ))}
        </div>

        {errors['mentorDomains'] && (
          <Typography variant='body1' className='mt-2 text-error'>
            <>{errors['mentorDomains']?.message}</>
          </Typography>
        )}

        <div className='my-4'>
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
          name='mentorInfo'
          control={control}
          render={({ field }) => (
            <InputField
              multiline
              errorMessage={errors['mentorInfo']?.message}
              placeholder='Start typing'
              {...field}
              ref={null}
            />
          )}
        />

        <div className='my-4'>
          <Typography variant='subtitle'>
            Please, enter your LinkedIn profile URL *
          </Typography>
        </div>

        <Controller
          name='mentorLinkedin'
          control={control}
          render={({ field }) => (
            <InputField
              placeholder='Enter URL'
              errorMessage={errors['mentorLinkedin']?.message}
              error={Boolean(errors['mentorLinkedin'])}
              {...field}
              ref={null}
            />
          )}
        />

        <div className='my-4'>
          <Typography variant='subtitle'>What is your name? *</Typography>
        </div>

        <Controller
          name='mentorName'
          control={control}
          render={({ field }) => (
            <InputField
              placeholder='Enter name'
              {...field}
              ref={null}
              errorMessage={errors['mentorName']?.message}
              error={Boolean(errors['mentorName'])}
            />
          )}
        />

        <div className='my-4'>
          <Typography variant='subtitle'>
            What is your email address? *
          </Typography>
        </div>

        <Controller
          name='mentorEmail'
          control={control}
          render={({ field }) => (
            <InputField
              placeholder='Enter email'
              {...field}
              ref={null}
              errorMessage={errors['mentorEmail']?.message}
              error={Boolean(errors['mentorEmail'])}
            />
          )}
        />
      </div>

      <div className='mt-10 flex flex-col medium:flex-row medium:justify-between'>
        <Button
          size={matched ? 'lg' : 'md'}
          variant='text'
          color='neutral'
          type='button'
          className='order-2 my-2 medium:order-1 medium:my-0'
        >
          Cancel
        </Button>
        <Button
          size={matched ? 'lg' : 'md'}
          type='submit'
          className='order-1 flex items-center justify-center medium:order-2'
        >
          Submit
          <Submit className='ml-2' />
        </Button>
      </div>
    </form>
  );
};

export default MentorApplication;
