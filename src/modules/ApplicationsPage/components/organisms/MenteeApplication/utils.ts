import * as Yup from 'yup';

import { websitePattern } from '@/shared/constants';

export const menteeApplicationSchema = Yup.object({
  program: Yup.string().nullable().required(),
  hours: Yup.string().nullable().required(),
  skills: Yup.string().nullable().required(),
  occupation: Yup.string().nullable().required(),
  applicantResource: Yup.string().nullable().required(),
  applicantInfo: Yup.string().nullable().required(),
  applicantName: Yup.string().nullable().required(),
  applicantEmail: Yup.string().required().email(),
  applicantPortfolio: Yup.string()
    .required('Please add your portfolio link')
    .matches(websitePattern, 'Invalid Url'),
});

export const skills = [
  { id: 'skills-1', label: '1', value: 'skills-1' },
  { id: 'skills-2', label: '2', value: 'skills-2' },
  { id: 'skills-3', label: '3', value: 'skills-3' },
  { id: 'skills-4', label: '4', value: 'skills-4' },
  { id: 'skills-5', label: '5', value: 'skills-5' },
];

export const occupationOptions = [
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

export const howDidYouHearQuestionOptions = [
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

export const programs = [
  { id: 'front-end-track', label: 'Front-end track', value: 'front-end' },
  { id: 'back-end-track', label: 'Back-end track', value: 'back-end' },
];

export const hours = [
  { id: '20', label: '20', value: '20' },
  { id: '25', label: '25', value: '25' },
  { id: '30', label: '30', value: '30' },
  { id: 'plus-30', label: '+30', value: 'plus-30' },
];
