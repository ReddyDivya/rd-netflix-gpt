import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Login from "../Login";

it('Should renders Sign In form with placeholders like email, password, and login button', () => {
    //Render the Login Component
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Login/>
            </Provider>
        </BrowserRouter>
    );
    
    //Email placeholder
    const emailInput = screen.getByPlaceholderText('Email address');

    // Check if the email input is present
    expect(emailInput).toBeInTheDocument();

    //Password placeholder
    const passwordInput = screen.getByPlaceholderText('Password');

    // Check if the Password input is present
    expect(passwordInput).toBeInTheDocument();
    
    //Check if the Logout button is present
    const signInButton = screen.getByRole('button', {name: 'Sign In'});
    expect(signInButton).toBeInTheDocument();
  });
