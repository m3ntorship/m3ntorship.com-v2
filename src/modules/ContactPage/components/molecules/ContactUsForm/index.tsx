import { yupResolver } from '@hookform/resolvers/yup';
import { Button, InputField, SelectInput } from 'm3ntorship-ui';
import { ReactElement, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import ApplicationSuccess from '@/modules/ApplicationsPage/components/molecules/ApplicationSuccess';

const schema = Yup.object({
  subject: Yup.string().required(),
  name: Yup.string().required().min(4, 'Min character length is 4'),
  email: Yup.string().required().email(),
  message: Yup.string().required().min(10, 'Min character length is 10'),
}).required();

type IFormFields = {
  subject: string;
  name: string;
  email: string;
  message: string;
};
const ContactUsForm = (): ReactElement => {
  const {
    handleSubmit,
    reset,
    control,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm<IFormFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [dataSubmited, setSubmitedData] = useState(false);
  const onSubmit = (data: IFormFields, e: React.MouseEvent) => {
    setSubmitedData(true);
    e.preventDefault();
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        subject: '',
        name: '',
        email: '',
        message: '',
      });
    }
  }, [reset, formState, isSubmitSuccessful]);
  return (
    <form
      role='form'
      name='contact us form'
      onSubmit={handleSubmit(onSubmit as SubmitHandler<IFormFields>)}
      className='flex border-spacing-2 flex-col gap-y-6 rounded-lrg bg-white p-8 shadow-shd-1'
    >
      {dataSubmited ? (
        <ApplicationSuccess />
      ) : (
        <>
          <div className='flex flex-wrap items-end justify-between gap-10 medium:flex-nowrap'>
            <div className='w-full medium:w-1/2'>
              <Controller
                name='subject'
                control={control}
                render={({ field }) => {
                  return (
                    <SelectInput
                      {...field}
                      errorMessage={errors['subject']?.message}
                      error={Boolean(errors['subject'])}
                      aria-label='select_subject'
                      label='Subject'
                      options={[
                        {
                          label: 'Subject One',
                          value: 'first',
                        },
                        {
                          label: 'Subject Two',
                          value: 'second',
                        },
                      ]}
                      placeholder='Choose'
                    />
                  );
                }}
              />
            </div>
            <div className='w-full medium:w-1/2'>
              <Controller
                name='name'
                control={control}
                render={({ field }) => {
                  return (
                    <InputField
                      errorMessage={errors['name']?.message}
                      error={Boolean(errors['name'])}
                      className='my_input'
                      id='name'
                      label='name'
                      placeholder='Enter your name'
                      {...field}
                    />
                  );
                }}
              />
            </div>
          </div>
          <div>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <InputField
                    errorMessage={errors['email']?.message}
                    error={Boolean(errors['email'])}
                    id='email'
                    label='email'
                    placeholder='Enter your email address'
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div>
            <Controller
              name='message'
              control={control}
              render={({ field }) => {
                return (
                  <InputField
                    id='textarea'
                    errorMessage={errors['message']?.message}
                    error={Boolean(errors['message'])}
                    label='message'
                    multiline
                    placeholder='Start typing'
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div className='inline-flex justify-end'>
            <Button type='submit' className='inline-block' size='lg'>
              Send
            </Button>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactUsForm;
