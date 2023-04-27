import { render, screen } from '@testing-library/react';
import CardMenu from "../src/Component/CardMenu.jsx";
import '@testing-library/jest-dom'

const categories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
];

describe("CardMenu", () => {
  beforeEach(() => {
    render(<CardMenu categories={categories} />);
  });

  test('should render a card for each category', () => {
    const cardElements = screen.getAllByRole('link');
    expect(cardElements).toHaveLength(categories.length);
  });

  test('should render category name in card', () => {
    categories.forEach((category) => {
      const categoryElement = screen.getByText(category.name);
      expect(categoryElement).toBeInTheDocument();
    });
  });
});
