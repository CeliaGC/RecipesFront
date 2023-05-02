import { render, screen, fireEvent } from '@testing-library/react';
import IngredientForm from '../src/Component/Ingredients';

vi.mock('react-router-dom', () => ({
    useLoaderData: vi.fn(() => ({
      ingredients: {
        id: 1,
        name: 'recipe test',
        quantity: 2,
        },
    })),
  }));
  
describe('IngredientForm', () => {
 test('updates ingredient quantity when input changes', () => {
    render(<IngredientForm />);
    const quantityInput = screen.getAllByPlaceholderText('Cantidad')[0];
    fireEvent.change(quantityInput, { target: { value: '100' } });
    expect(quantityInput.value).toBe('100');
  });

  test('updates ingredient unit when input changes', () => {
    render(<IngredientForm />);
    const unitInput = screen.getAllByPlaceholderText('Unidad de medida')[0];
    fireEvent.change(unitInput, { target: { value: 'gr' } });
    expect(unitInput.value).toBe('gr');
  });

  test('updates checked state when checkbox is clicked', () => {
    render(<IngredientForm />);
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
  
});
