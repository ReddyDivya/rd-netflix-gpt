import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/slices/appStore";
import "@testing-library/jest-dom";
import GptSearchBar from '../GptSearchBar';

it('Should show languages combobox on GPT search button', () => {
    //Render the GptSearchBar Component
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <GptSearchBar/>
            </Provider>
        </BrowserRouter>
    );
    
    // Use getAllByTestId to select all elements with a specific test ID
  const languages = screen.getByPlaceholderText('What would you like to watch today?');

  // Assertions
  expect(languages).toBeInTheDocument();
});
