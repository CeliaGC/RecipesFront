import { render, screen } from '@testing-library/react';
import Carousel from "./Carousel";

describe('Carousel', () => {
  it('should render the first image', () => {
    render(<Carousel />);
    const firstImage = screen.getByAltText('First slide');
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveAttribute('src', 'src/Img/_21x_9lqi913b4_Candle-Design-Wallpaper.jpg');
  });
});
