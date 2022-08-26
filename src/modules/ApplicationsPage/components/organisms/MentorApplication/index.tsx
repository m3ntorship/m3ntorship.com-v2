import {
  Button,
  Checkbox,
  InputField,
  Radio,
  SelectInput,
  Typography,
} from 'm3ntorship-ui';
import Submit from 'public/images/applications-page/submit.svg';
import { ReactElement } from 'react';

const currentOccupationOptions = [
  {
    label: 'Occupation 1',
    value: 'occupation 1',
  },
];

const MentorApplication = (): ReactElement => {
  return (
    <div className='mt-12 w-full'>
      <div>
        <div className='mb-4'>
          <Typography variant='subtitle'>
            What are your expertise areas?
          </Typography>
        </div>
        <div className='inline-grid grid-flow-row gap-4'>
          <Checkbox label='Front-End' value='front-end' />
          <Checkbox label='Back-End' value='back-end' />
          <Checkbox label='Android' value='android' />
          <Checkbox label='IOS' value='ios' />
          <Checkbox label='Product management' value='product-management' />
          <Checkbox label='Other' value='other' />
        </div>
        <div className='my-4'>
          <Typography variant='subtitle'>
            What is your current occupation? *
          </Typography>
        </div>
        <SelectInput placeholder='choose' options={currentOccupationOptions} />

        <div className='my-4'>
          <Typography variant='subtitle'>
            How many hours per week can you dedicate to the program? *
          </Typography>
        </div>
        <div className='inline-grid grid-flow-row gap-4 medium:grid-flow-col medium:gap-8'>
          <Radio label='20' id='20' name='hours' />
          <Radio label='25' id='25' name='hours' />
          <Radio label='30' id='30' name='hours' />
          <Radio label='+30' id='plus-30' name='hours' />
        </div>

        <div className='my-4'>
          <Typography variant='subtitle'>
            Please, tell us about your self and your motivation to apply *
          </Typography>
        </div>
        <InputField multiline placeholder='Start typing' />

        <div className='my-4'>
          <Typography variant='subtitle'>
            Please, enter your LinkedIn profile URL *
          </Typography>
        </div>
        <InputField placeholder='Enter URL' />

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
      </div>

      <div className='mt-10 flex flex-col medium:flex-row medium:justify-between'>
        <Button
          variant='text'
          color='neutral'
          className='order-2 my-2 medium:order-1 medium:my-0'
        >
          Cancel
        </Button>
        <Button className='order-1 flex items-center justify-center medium:order-2'>
          Submit
          <Submit className='ml-2' />
        </Button>
      </div>
    </div>
  );
};

export default MentorApplication;
