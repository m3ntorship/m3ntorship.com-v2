import { faker } from '@faker-js/faker';

import { IFeedback } from '@/modules/TestimonialsPage/components/types/IFeedback';

type GetFeedbacks = {
  data: IFeedback[];
  hasMore: boolean;
};

const NUMBER_OF_STORED_FEEDBACKS = 14;

function generateRandomFeedback(): IFeedback {
  return {
    mentee: {
      id: faker.datatype.uuid(),
      menteeInfo: {
        src: faker.image.avatar(),
        name: faker.name.firstName(),
        track: faker.helpers.arrayElement([
          'Front-end',
          'Back-end',
          'IOS',
          'Devops',
        ]),
        cohort: faker.datatype.number(4),
        linkedinUrl: faker.helpers.fake(`https://linkedin.com/`),
        githubUrl: faker.helpers.fake(`https://github.com/`),
      },
      menteeFeedback: faker.lorem.paragraph(),
    },
  };
}

function generateRandomFeedbacks(numOfFeedback: number): IFeedback[] {
  return Array(numOfFeedback)
    .fill(1)
    .map(() => generateRandomFeedback());
}

export async function getFeedbacks(
  limit: number,
  offset: number
): Promise<GetFeedbacks> {
  const remainedFeedbacks = NUMBER_OF_STORED_FEEDBACKS - offset;
  if (remainedFeedbacks > limit)
    return await Promise.resolve({
      data: generateRandomFeedbacks(limit),
      hasMore: true,
    });

  return await Promise.resolve({
    data: generateRandomFeedbacks(remainedFeedbacks),
    hasMore: false,
  });
}
