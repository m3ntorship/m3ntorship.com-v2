import * as Yup from 'yup';

import { linkedinUrlPattern } from '@/shared/constants';

const mentorDomainsSchema = {
  frontend: Yup.bool(),
  backend: Yup.bool(),
  android: Yup.bool(),
  ios: Yup.bool(),
  productManagement: Yup.bool(),
  other: Yup.bool(),
};

export const mentorApplicationSchema = Yup.object({
  occupation: Yup.string().nullable().required(),
  hours: Yup.string().nullable().required(),
  mentorInfo: Yup.string().nullable().required(),
  mentorName: Yup.string().nullable().required(),
  mentorEmail: Yup.string().required().email(),
  mentorLinkedin: Yup.string()
    .required('Please add your Linkedin Profile')
    .matches(linkedinUrlPattern, 'Invalid linkedin Url'),
  mentorDomains: Yup.array()
    .of(Yup.object().shape(mentorDomainsSchema))
    .test(
      'testMentorDomains',
      'Must choose at least one track',
      (domains = []) => {
        const selectedDomains = domains?.filter((domain) => domain.value);
        return Boolean(selectedDomains?.length);
      }
    ),
});

export const mentorDomains = [
  { id: '1', label: 'Front-End', value: false, name: 'frontend' },
  { id: '2', label: 'Back-End', value: false, name: 'backend' },
  { id: '3', label: 'Android', value: false, name: 'android' },
  { id: '4', label: 'IOS', value: false, name: 'ios' },
  {
    id: '6',
    label: 'Product management',
    value: false,
    name: 'productManagement',
  },
  { id: '6', label: 'Other', value: false, name: 'other' },
];

export const occupationOptions = [
  {
    label: 'Full Time',
    value: 'full-time',
  },
  {
    label: 'Part Time',
    value: 'part-time',
  },
];

export const hours = [
  { id: '20', label: '20', value: '20' },
  { id: '25', label: '25', value: '25' },
  { id: '30', label: '30', value: '30' },
  { id: 'plus-30', label: '+30', value: 'plus-30' },
];
