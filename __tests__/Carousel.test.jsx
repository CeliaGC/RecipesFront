import { render, screen } from '@testing-library/react';
import CarouselFadeExample from './CarouselFadeExample';

describe('CarouselFadeExample', () => {
  it('should render the first image', () => {
    render(<CarouselFadeExample />);
    const firstImage = screen.getByAltText('First slide');
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveAttribute('src', 'src/Img/_21x_9lqi913b4_Candle-Design-Wallpaper.jpg');
  });
});
