// import { render, screen } from '@testing-library/react';
// import CardRecipe from "../src/Component/CardRecipe.jsx";
// import '@testing-library/jest-dom'

// vi.mock('react-router-dom', () => ({
//   useLoaderData: vi.fn(() => ({
//     recipe: {
//       title: 'recipe test',
//       description: 'arroces',
//       image: 'https://example.com/recipe.jpg',
//       ingredients: ['Ingredient 1', 'Ingredient 2'],
//       steps: ['Step 1', 'Step 2'],
//       prepTime: '30 min',
//       difficulty: 'medium',
//       },
//   })),
// }));

// describe("CardRecipe", () => {
//     const recipe = {
//       title: 'recipe test',
//       description: 'arroces',
//       image: 'https://example.com/recipe.jpg',
//       ingredients: ['Ingredient 1', 'Ingredient 2'],
//       steps: ['Step 1', 'Step 2'],
//       prepTime: '30 min',
//       difficulty: 'medium',
//     };
  
//     // beforeEach(() => {
//     //   render(<CardRecipe title={recipe.title} description={recipe.description} image={recipe.image} />);
//     // });
  
//     test('should render recipe title', () => {
//       const recipeTitle = screen.queryByText(/recipe test/i);
//       expect(recipeTitle).toBeInTheDocument();
//     });
  
//     test('should render recipe description', () => {
//       const descriptionElement = screen.queryByText(/arroces/i);
//       expect(descriptionElement).toBeInTheDocument();
//     });
  
//     test('renders recipe ingredients', () => {
//       const ingredientsElement1 = screen.queryByText(/Ingredient 1/i);
//       const ingredientsElement2 = screen.queryByText(/Ingredient 2/i);
//       expect(ingredientsElement1).toBeInTheDocument();
//       expect(ingredientsElement2).toBeInTheDocument();
//     });
  
//     test('should render recipe image', () => {
//       const imageElement = screen.getByRole('img');
//       expect(imageElement).toBeInTheDocument();
//       expect(imageElement).toHaveAttribute('src', recipe.image);
//     });
  
//     test('should render prep time', () => {
//       const prepTimeElement = screen.queryByText(/30 min/i);
//       expect(prepTimeElement).toBeInTheDocument();
//     });
  
//     test('should render difficulty', () => {
//       const difficultyElement = screen.queryByText(/medium/i);
//       expect(difficultyElement).toBeInTheDocument();
//     });
//   });
  