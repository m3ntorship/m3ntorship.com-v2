export const isDevelopment = process.env.NEXT_PUBLIC_APP_ENV === 'development';

export const websitePattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i;

export const linkedinUrlPattern =
  /https?:\/\/(www\.)?linkedin.com\/(in|company)\/[a-zA-Z0-9-]{5,30}/i;

export const SCREENS = {
  SM: 0,
  MD: 600,
  LG: 900,
  XLG: 1331,
};
