import { render, screen } from '@testing-library/react';
import RecipeInfo from "../src/Component/RecipeInfo.jsx";
import '@testing-library/jest-dom'

vi.mock('react-router-dom', () => ({
    useLoaderData: vi.fn(() => ({
        recipe: {
            title: 'recipe test',
      description: 'arroces',
      image: 'https://example.com/recipe.jpg',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      steps: ['Step 1', 'Step 2'],
    },
  })),
}));

describe("RecipeInfo", () => {
  beforeEach(() => {
    render(<RecipeInfo />);
  });

  test('should render recipe title', () => {
    const recipeTitle = screen.getByText(/recipe test/i);
    expect(recipeTitle).toBeInTheDocument();
  });

  test('should render recipe description', () => {
    const descriptionElement = screen.getByText(/arroces/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders recipe ingredients', () => {
    const ingredientsElement1 = screen.getByText(/Ingredient 1/i);
    const ingredientsElement2 = screen.getByText(/Ingredient 2/i);
    expect(ingredientsElement1).toBeInTheDocument();
    expect(ingredientsElement2).toBeInTheDocument();
  });

  test('should render recipe image', () => {
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveStyle("background-image: url(https://example.com/recipe.jpg)");
  });
});