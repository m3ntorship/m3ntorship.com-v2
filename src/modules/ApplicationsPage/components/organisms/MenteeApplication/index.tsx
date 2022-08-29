import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Progress, Typography } from 'm3ntorship-ui';
import ArrowLeft from 'public/images/applications-page/arrow-left.svg';
import ArrowRight from 'public/images/applications-page/arrow-right.svg';
import Submit from 'public/images/applications-page/submit.svg';
import { Dispatch, ReactElement, SetStateAction } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import {
  MenteeApplicationStepOne,
  MenteeApplicationStepThree,
  MenteeApplicationStepTwo,
} from '@/modules/ApplicationsPage/components/molecules/';
import { SCREENS } from '@/shared/constants';
import useMedia from '@/shared/hooks/windowSize';

import { menteeApplicationSchema } from './utils';

interface MenteeApplicationProps {
  currentStep: number;
  setCurrentStep(newStep: number): void;
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}

const MenteeApplication = ({
  currentStep,
  setCurrentStep,
  setShowSuccess,
}: MenteeApplicationProps): ReactElement => {
  const matched = useMedia(`(max-width: ${SCREENS.MD}px)`);

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(menteeApplicationSchema),
  });

  const previousButtonClickHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  const nextButtonClickHandler = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await methods.trigger(['program', 'hours', 'applicantInfo']);
    }

    if (currentStep === 2) {
      isValid = await methods.trigger(['applicantPortfolio', 'skills']);
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleMenteeApplication: SubmitHandler<FieldValues> = (data) => {
    setShowSuccess(true);
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className='mt-12 w-full'
        onSubmit={methods.handleSubmit(handleMenteeApplication)}
      >
        {currentStep > 1 && (
          <Typography variant='h4' className='mb-10'>
            Mentee application
          </Typography>
        )}
        <Progress value={currentStep} maxValue={3} />

        <div className='mt-12 mb-10'>
          {currentStep === 1 && <MenteeApplicationStepOne />}
          {currentStep === 2 && <MenteeApplicationStepTwo />}
          {currentStep === 3 && <MenteeApplicationStepThree />}
        </div>
        <div className='flex flex-col medium:flex-row medium:justify-between'>
          <Button
            size={matched ? 'lg' : 'md'}
            variant='text'
            color='neutral'
            className='order-2 medium:order-1'
          >
            Cancel
          </Button>
          <div className='order-1 flex flex-col medium:order-2 medium:flex-row'>
            {currentStep > 1 && (
              <Button
                size={matched ? 'lg' : 'md'}
                type='button'
                className='order-2 my-2 flex items-center  justify-center medium:order-1 medium:my-0 medium:mr-2'
                variant='text'
                onClick={previousButtonClickHandler}
              >
                <ArrowLeft className='mr-2' />
                Previous
              </Button>
            )}
            {currentStep < 3 && (
              <Button
                size={matched ? 'lg' : 'md'}
                type='button'
                className='order-1 mb-2 flex items-center justify-center medium:order-2'
                onClick={nextButtonClickHandler}
              >
                Next
                <ArrowRight className='ml-2' />
              </Button>
            )}
            {currentStep === 3 && (
              <Button
                size={matched ? 'lg' : 'md'}
                className='order-1 flex items-center justify-center medium:order-2'
                type='submit'
              >
                Submit
                <Submit className='ml-2' />
              </Button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default MenteeApplication;
