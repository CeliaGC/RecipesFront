import { render, screen } from '@testing-library/react';
import RecipeInfo from "../src/Component/RecipeInfo.jsx";
import '@testing-library/jest-dom'

// vi.mock('react-router-dom', () => ({
//     useLoaderData: vi.fn(() => ({
//         recipe: {
//             title: 'Test Recipe',
//             description: 'This is a test recipe',
//             image: 'https://example.com/recipe.jpg',
//             ingredients: ['Ingredient 1', 'Ingredient 2'],
//             steps: ['Step 1', 'Step 2'],
//         },

//     })),
// }));

// describe("RecipetInfo", () => {
//     beforeEach(() => {
//         render(<RecipeInfo />);
//     })
   
test('should render recipe title', () => {
    render(<RecipeInfo />);
    const recipeTitle = screen.getByText(/arroces/);
    expect(recipeTitle).toBeInTheDocument();
});

// test('should render recipe description', () => {
//     const descriptionElement = screen.getByText(/This is a test recipe/i);
//     expect(descriptionElement).toBeInTheDocument();
// });

// test('renders recipe ingredients', () => {
//     const ingredientsElement = screen.getByText(/Ingredient /i);
//     expect(ingredientsElement).toBeInTheDocument();
// });

// test('should render recipe image', () => {
//     const imageElement = screen.getByRole('img');
//     expect(imageElement).toBeInTheDocument();
//     expect(imageElement).toHaveStyle("background-image: url(https://example.com/product.jpg)");
//   });

// })