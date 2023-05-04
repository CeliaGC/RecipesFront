import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../src/Component/Register';
import '@testing-library/jest-dom'

vi.mock('react-router-dom', () => ({
  useLoaderData: vi.fn(() => ({
    username: 'testUser',
    email: 'test@example.com',
    password: 1234,
  })),
}));

describe('Register', () => {
  test('should render all form fields', () => {
    render(<Register />);
    const userNameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const confirmPasswordField = screen.getByLabelText(/confirm password/i);
    const userEmailField = screen.getByLabelText(/email/i);
    const userPhoneField = screen.getByLabelText(/phone/i);

    expect(userNameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(confirmPasswordField).toBeInTheDocument();
    expect(userEmailField).toBeInTheDocument()
    expect(userPhoneField).toBeInTheDocument();
  });

  test('should update form field values on user input', () => {
    render(<Register />);
    const userNameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const confirmPasswordField = screen.getByLabelText(/confirm password/i);
    const userEmailField = screen.getByLabelText(/email/i);
    const userPhoneField = screen.getByLabelText(/phone/i);

    const inputValues = {
      userName: 'testUser',
      password: 'testPassword',
      confirmPassword: 'testPassword',
      userEmail: 'testUser@example.com',
      userPhone: '1234567890',
    };

    fireEvent.change(userNameField, { target: { value: inputValues.userName } });
    fireEvent.change(passwordField, { target: { value: inputValues.password } });
    fireEvent.change(confirmPasswordField, { target: { value: inputValues.confirmPassword } });
    fireEvent.change(userEmailField, { target: { value: inputValues.userEmail } });
    fireEvent.change(userPhoneField, { target: { value: inputValues.userPhone } });

    expect(userNameField).toHaveValue(inputValues.userName);
    expect(passwordField).toHaveValue(inputValues.password);
    expect(confirmPasswordField).toHaveValue(inputValues.confirmPassword);
    expect(userEmailField).toHaveValue(inputValues.userEmail);
    expect(userPhoneField).toHaveValue(inputValues.userPhone);
  });
});

