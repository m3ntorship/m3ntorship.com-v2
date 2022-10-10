export interface IMenteeInfo {
  src: string;
  name: string;
  track: string;
  cohort: number;
  linkedinUrl: string;
  githubUrl: string;
}

export interface IFeedback {
  mentee: {
    id: string;
    menteeInfo: IMenteeInfo;
    menteeFeedback: string;
  };
}
