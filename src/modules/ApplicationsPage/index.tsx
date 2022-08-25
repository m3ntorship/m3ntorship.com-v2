import { Typography } from 'm3ntorship-ui';
import Mentee from 'public/images/applications-page/mentee.svg';
import Mentor from 'public/images/applications-page/mentor.svg';
import { ReactElement, useState } from 'react';

import ApplicationsHeader from '@/modules/ApplicationsPage/components/ApplicationsHeader';
import ApplicationsTab from '@/modules/ApplicationsPage/components/ApplicationsTab';
import MenteeApplication from '@/modules/ApplicationsPage/components/MenteeApplication';
import MentorApplication from '@/modules/ApplicationsPage/components/MentorApplication';

enum activeTabEnum {
  MENTOR = 'mentor',
  MENTEE = 'mentee',
}

export default function ApplicationsPage(): ReactElement {
  const [activeTab, setActiveTab] = useState<null | activeTabEnum>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const menteeHandleClick = (): void => {
    setActiveTab(activeTabEnum.MENTEE);
  };

  const mentorHandleClick = (): void => {
    setActiveTab(activeTabEnum.MENTOR);
  };

  return (
    <div className='flex flex-col items-center justify-center '>
      <ApplicationsHeader />

      <div className='mt-16 w-full  p-14 medium:w-xxxxxl'>
        {currentStep === 1 && (
          <>
            <Typography variant='h4'>
              Semper feugiat nibh sed pulvinar
            </Typography>
            <div className='mt-10 flex'>
              <ApplicationsTab
                active={activeTab === activeTabEnum.MENTEE}
                onClick={menteeHandleClick}
              >
                <div className='flex items-center justify-center'>
                  <Mentee className='hidden h-14  w-16 medium:block' />
                  <span className='sm:ml-4 font-inter leading-24 tracking-wide'>
                    Apply as a mentee
                  </span>
                </div>
              </ApplicationsTab>
              <div className='ml-2'>
                <ApplicationsTab
                  active={activeTab === activeTabEnum.MENTOR}
                  onClick={mentorHandleClick}
                >
                  <div className='flex items-center justify-center'>
                    <Mentor className='hidden h-14 w-16 medium:block' />
                    <span className='sm:ml-4 font-inter leading-24 tracking-wide'>
                      Apply as a mentor
                    </span>
                  </div>
                </ApplicationsTab>
              </div>
            </div>
          </>
        )}

        {activeTab === 'mentee' && (
          <MenteeApplication
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {activeTab === 'mentor' && <MentorApplication />}
      </div>
    </div>
  );
}
