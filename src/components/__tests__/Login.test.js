import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/slices/appStore";
import "@testing-library/jest-dom";
import Login from "../Login";

//checking Sign In form with placeholders like Email, Password, and Sign In button
it('Should show Sign In form with placeholders like Email, Password, and Sign In button', () => {
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

//checking Sign In form with "New to Netflix? Sign up Now" button
it('Should show Sign In form with "New to Netflix? Sign up Now" button', () => {
    //Render the Sign Up Component
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Login/>
            </Provider>
        </BrowserRouter>
    );

    //Sign Up text
    const signUpText = screen.getByText('New to Netflix? Sign up Now');

    // Check if the Sign Up text is present
    expect(signUpText).toBeInTheDocument();
});

//When we click on Sign up Now, render Sign Up form and check for full name
it("Should render Sign Up form when Sign up Now button is clicked", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Login/>
            </Provider>
        </BrowserRouter>
    )
    
    const signUpBtn = screen.getByText("New to Netflix? Sign up Now");
    
    // Simulate a click event on the Sign up Now button
    fireEvent.click(signUpBtn);
    
    // Assert that the button text has changed to "Already registered? Sign In Now."
    //waitFor used to render elements dynamically
    await waitFor(() => {
        expect(screen.getByText("Already registered? Sign In Now.")).toBeInTheDocument();
    });

    //Full Name placeholder
    const nameInput = screen.getByPlaceholderText('Full Name');

    // Check if the fullname input is present
    expect(nameInput).toBeInTheDocument();
});

// it("Should show 'Email ID, Password are not valid' on Sign In button", () => {
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Login/>
//             </Provider>
//         </BrowserRouter>
//     );

//     // Check if the Sign In button is present
//     const signInButton = screen.getByRole('button', { name: 'Sign In' });

//     fireEvent.change(screen.getByLabelText("Email address"), {
//         target: {value  : 'test@gmail.com'}
//     })

//     fireEvent.change(screen.getByLabelText('Password'), {
//         target: {value : 'testPassword'}
//     })

//     // Simulate a click event on the Sign In button
//     fireEvent.click(signInButton);


      
//     const errorEmailMsg = screen.getByText('Email ID is not valid');
//     const errorPasswordMsg = screen.getByText('Password is not valid');
    
//     expect(errorEmailMsg).toBeInTheDocument();
//     expect(errorPasswordMsg).toBeInTheDocument();
// });
