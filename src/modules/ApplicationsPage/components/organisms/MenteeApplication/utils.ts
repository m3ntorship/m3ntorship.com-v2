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
