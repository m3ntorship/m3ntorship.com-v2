import { render, screen } from '@testing-library/react';
import React from 'react';

import TestimonialCard from '.';

const cardInfo = {
  id: '1',
  menteeInfo: {
    src: 'www.placeholder.com',
    name: 'ahmed',
    track: 'front-end',
    cohort: 10,
    linkedinUrl: 'https://www.linkedin.com/me',
    githubUrl: 'https://www.github.com/me',
  },
  menteeFeedback: 'some description',
};

describe('Render Testimonal card elements', () => {
  const { name, src, cohort, track, linkedinUrl, githubUrl } =
    cardInfo.menteeInfo;
  const { menteeFeedback } = cardInfo;
  render(<TestimonialCard mentee={cardInfo} />);
  it('should render two anchor elements', () => {
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', linkedinUrl);
    expect(links[1]).toHaveAttribute('href', githubUrl);
  });
  it('Avatr should be rendered', () => {
    render(<TestimonialCard mentee={cardInfo} />);
    const avatarElement = screen.getByRole('img', { name });
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', src);
    expect(screen.getByText(track, { exact: false }));
    expect(screen.getByTestId('badge')).toHaveTextContent(String(cohort));
  });
  it('Track name should be correctly displayed', () => {
    render(<TestimonialCard mentee={cardInfo} />);
    expect(screen.getByText(track, { exact: false }));
  });
  it('Cohort should be correctly displayed', () => {
    render(<TestimonialCard mentee={cardInfo} />);
    expect(screen.getByTestId('badge')).toHaveTextContent(String(cohort));
  });
  it('Review content should be rendred correctly', () => {
    const description = new RegExp(menteeFeedback);
    render(<TestimonialCard mentee={cardInfo} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
