import {screen,render} from '@testing-library/react'
import Header from './Header'


// Unit Tests: Unit tests focus on testing individual units of code in isolation, typically at the function or component level. 
// In React, this involves testing the behavior and output of components, their methods, or utility functions. 
// Unit tests verify that these units of code work as expected, with specific inputs and outputs, without relying on external dependencies.


test('should render same text passed into title prop',()=>{
    // The header is going to take in a prop
    render(<Header title="My Header" />)
    const headingElement= screen.getByText(/My Header/i)
    expect(headingElement).toBeInTheDocument();
})