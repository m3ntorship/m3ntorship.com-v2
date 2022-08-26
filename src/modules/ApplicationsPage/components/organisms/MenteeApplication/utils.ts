import * as Yup from 'yup';

import { websitePattern } from '@/shared/constants';

export const menteeApplicationSchema = Yup.object({
  program: Yup.string().nullable().required(),
  hours: Yup.string().nullable().required(),
  skills: Yup.string().nullable().required(),
  applicantInfo: Yup.string().required(),
  applicantPortfolio: Yup.string()
    .required('Please add your portfolio link')
    .matches(websitePattern, 'Invalid Url'),
});
