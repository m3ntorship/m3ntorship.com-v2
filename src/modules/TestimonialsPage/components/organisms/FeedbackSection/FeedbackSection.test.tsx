import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getFeedbacks } from '@/modules/TestimonialsPage/api';

import FeedbackSection from '.';

jest.mock('@/modules/TestimonialsPage/api', () => {
  const mentee = {
    menteeInfo: {
      src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1246.jpg',
      name: 'Robin',
      track: 'IOS',
      cohort: 2,
      linkedinUrl: 'https://linkedin.com/',
      githubUrl: 'https://github.com/',
    },
    menteeFeedback:
      'Et tenetur quaerat sapiente aspernatur numquam pariatur dolor aliquam. Quis quisquam voluptate laudantium. Eos totam eum. Explicabo ut corrupti doloremque dolore eligendi quidem qui dignissimos illo. Perspiciatis quod illum mollitia exercitationem veniam aliquid dolorum nihil quos.',
  };

  const responses = [
    {
      data: [
        {
          mentee: {
            id: '1',
            ...mentee,
          },
        },
        {
          mentee: {
            id: '2',
            ...mentee,
          },
        },
        {
          mentee: {
            id: '3',
            ...mentee,
          },
        },
        {
          mentee: {
            id: '4',
            ...mentee,
          },
        },
      ],
      hasMore: true,
    },
    {
      data: [
        {
          mentee: {
            id: '5',
            ...mentee,
          },
        },
        {
          mentee: {
            id: '6',
            ...mentee,
          },
        },
      ],
      hasMore: false,
    },
  ];

  return {
    getFeedbacks: jest
      .fn()
      .mockResolvedValueOnce(Promise.resolve(responses[0]))
      .mockResolvedValueOnce(Promise.resolve(responses[0]))
      .mockResolvedValueOnce(Promise.resolve(responses[1])),
  };
});

describe('FeedbackSection', () => {
  it('should initially render 4 TestimonialCard components and "load more" button when hasMore is set to true', async () => {
    const feedbacks = await getFeedbacks(10, 0);

    render(<FeedbackSection feedbacks={feedbacks} />);

    const testimonialCards = screen.getAllByTestId('testimonial-card');
    const btn = screen.getByText('Load more');

    expect(testimonialCards).toHaveLength(4);
    expect(btn).toBeInTheDocument();
  });

  it('should render 6 TestimonialCard components with no "load more" button when click on "Load more" button and hasMore is set to false', async () => {
    jest.useFakeTimers();

    const feedbacks = await getFeedbacks(4, 0);

    render(<FeedbackSection feedbacks={feedbacks} />);

    const btn = screen.getByText('Load more');

    expect(btn).toBeInTheDocument();

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    await ue.click(btn);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getAllByTestId('testimonial-card')).toHaveLength(6);
    expect(btn).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
