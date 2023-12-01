import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Login from "../Login";

it('renders Sign In button', () => {

    //Render the Header Component
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Login/>
            </Provider>
        </BrowserRouter>
    );

    //Check if the Logout button is present
    const loginButton = screen.getByRole('button', {name: 'Sign In'});
    expect(loginButton).toBeInTheDocument();
})

