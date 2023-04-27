// import { render, screen } from '@testing-library/react';
// import FormRecipe from "../src/Component/FormRecipe.jsx";
// import '@testing-library/jest-dom'

// vi.mock('react-router-dom', () => ({
//     useLoaderData: vi.fn(() => ({
//       recipe: {
//         title: 'recipe test',
//         description: 'arroces',
//         image: 'https://example.com/recipe.jpg',
//         ingredients: 'Ingredient 1, Ingredient 2',
//         steps: ['Step 1', 'Step 2'],
//        },
//     })),
// }));

// describe("FormRecipe", () => {
//   beforeEach(() => {
//     render(<FormRecipe />);
//   });

//   test('should render recipe title', () => {
//     const recipeTitle = screen.getByLabelText(/nombre/i);
//     expect(recipeTitle).toBeInTheDocument();
//     expect(recipeTitle).toHaveValue('recipe test');
//   });

//   test('should render recipe description', () => {
//     const descriptionElement = screen.getByLabelText(/modo de preparación/i);
//     expect(descriptionElement).toBeInTheDocument();
//     expect(descriptionElement).toHaveValue('Step 1\nStep 2');
//   });

//   test('renders recipe ingredients', () => {
//     const ingredientsElement = screen.getByLabelText(/ingredientes/i);
//     expect(ingredientsElement).toBeInTheDocument();
//     expect(ingredientsElement).toHaveValue('Ingredient 1, Ingredient 2');
//   });

//   test('should render recipe image', () => {
//     const imageElement = screen.getByRole('img');
//     expect(imageElement).toBeInTheDocument();
//     expect(imageElement).toHaveStyle("background-image: url(https://example.com/recipe.jpg)");
//   });
// });
