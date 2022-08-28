import { Typography } from 'm3ntorship-ui';
import Mentee from 'public/images/applications-page/mentee.svg';
import Mentor from 'public/images/applications-page/mentor.svg';
import { ReactElement, useState } from 'react';

import {
  ApplicationsHeader,
  ApplicationsTab,
} from '@/modules/ApplicationsPage/components/molecules/';
import {
  MenteeApplication,
  MentorApplication,
} from '@/modules/ApplicationsPage/components/organisms/';
import { SCREENS } from '@/shared/constants';
import useMedia from '@/shared/hooks/windowSize';

enum activeTabEnum {
  MENTOR = 'mentor',
  MENTEE = 'mentee',
}

export default function ApplicationsPage(): ReactElement {
  const [activeTab, setActiveTab] = useState<null | activeTabEnum>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const matched = useMedia(`(max-width: ${SCREENS.MD}px)`);

  const menteeHandleClick = (): void => {
    setActiveTab(activeTabEnum.MENTEE);
  };

  const mentorHandleClick = (): void => {
    setActiveTab(activeTabEnum.MENTOR);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <ApplicationsHeader />

      <div className='my-16 w-full rounded-lrg bg-white medium:p-14 medium:shadow-shd-1 large:w-xxxxxl'>
        {currentStep === 1 && (
          <>
            <Typography variant='h4'>
              Semper feugiat nibh sed pulvinar
            </Typography>
            <div className='mt-10 grid grid-cols-2 gap-4'>
              <ApplicationsTab
                active={activeTab === activeTabEnum.MENTEE}
                onClick={menteeHandleClick}
              >
                <div className='flex items-center justify-center'>
                  <Mentee className='mr-4 hidden h-14 w-16 medium:block' />
                  <span className='sm:ml-4 font-inter leading-24 tracking-wide'>
                    {!matched && 'Apply as a'} mentee
                  </span>
                </div>
              </ApplicationsTab>
              <div className='ml-2'>
                <ApplicationsTab
                  active={activeTab === activeTabEnum.MENTOR}
                  onClick={mentorHandleClick}
                >
                  <div className='flex items-center justify-center'>
                    <Mentor className='mr-4 hidden h-14 w-16 medium:block' />
                    <span className='sm:ml-4 font-inter leading-24 tracking-wide'>
                      {!matched && 'Apply as a'} mentor
                    </span>
                  </div>
                </ApplicationsTab>
              </div>
            </div>
          </>
        )}

        {activeTab === activeTabEnum.MENTEE && (
          <MenteeApplication
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {activeTab === activeTabEnum.MENTOR && <MentorApplication />}
      </div>
    </div>
  );
}
