import { render, screen } from '@testing-library/react';
import CardRecipe from "../src/Component/CardRecipe.jsx";
import '@testing-library/jest-dom'

vi.mock('react-router', () => ({
    useLoaderData: vi.fn(() => ({
        recipes: [
          {
            name: 'recipe test',
            posteBy: 'author test',
            categoryName: 'category test',
            //author: 'author test',
            category: {
              id: 1,
            },
            id: 1,
          },
        ],
        categories: [
          {
            id: 1,
            name: 'category test',
          },
        ],
    })),
}));

describe("CardRecipe", () => {
  beforeEach(() => {
    render(<CardRecipe />);
  });

  test('should render recipe name', () => {
    const recipeName = screen.getByText(/recipe test/i);
    expect(recipeName).toBeInTheDocument();
  });

  test('should render recipe posteBy', () => {
    const posteByElement = screen.getByText(/author test/i);
    expect(posteByElement).toBeInTheDocument();
  });

  test('should render recipe categoryName', () => {
    const categoryNameElement = screen.getByText(/category test/i);
    expect(categoryNameElement).toBeInTheDocument();
  });

//   test('should render recipe author', () => {
//     const authorElement = screen.getByText(/author test/i);
//     expect(authorElement).toBeInTheDocument();
//   });

  test('should render recipe category id', () => {
    const categoryIdElement = screen.getByText(/1/i);
    expect(categoryIdElement).toBeInTheDocument();
  });

  test('should render recipe link', () => {
    const linkElement = screen.getByText(/Ver/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/ViewRecipe/1');
  });
});
