import * as Yup from 'yup';

export const menteeApplicationSchema = Yup.object({
  program: Yup.string().nullable().required(),
  hours: Yup.string().nullable().required(),
  applicantInfo: Yup.string().required(),
});
