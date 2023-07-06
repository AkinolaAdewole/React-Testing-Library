import {screen,render} from '@testing-library/react'
import Header from './Header'


// Unit Tests: Unit tests focus on testing individual units of code in isolation, typically at the function or component level. 
// In React, this involves testing the behavior and output of components, their methods, or utility functions. 
// Unit tests verify that these units of code work as expected, with specific inputs and outputs, without relying on external dependencies.


//

describe('testing',()=>{
    test('should render same text passed into title prop', async ()=>{
        // The header is going to take in a prop
        render(<Header title="My Header" />)
        const headingElement= screen.getByText(/My Header/i)
        expect(headingElement).toBeInTheDocument();
    })
})

// test('should render same text passed into title prop', async ()=>{
//     // The header is going to take in a prop
//     render(<Header title="My Header" />)
//     const headingElement= screen.getByTitle(/My Header/i)
//     expect(headingElement).toBeInTheDocument();
// })


// test('should render same text passed into title prop', async ()=>{
//     // The header is going to take in a prop, I can also add name if I have two header
//     render(<Header title="My Header"/>)
//     const headingElement= screen.getByRole('heading')
//     expect(headingElement).toBeInTheDocument();
// })


// test('should render getBy Role', ()=>{
//     // The header is going to take in a prop, I can also add name if I have two header
//     render(<Header title="My Header"/>) 
//     const headingElement= screen.getByRole('heading',{name:'My Header'})
//     expect(headingElement).toBeInTheDocument();
// }) 

// test('should render same text passed into title prop', ()=>{
//     // The header is going to take in a prop, I can also add name if I have two header
//     render(<Header title="My Header"/>) 
//     const headingElement= screen.getByTitle('Header')
//     expect(headingElement).toBeInTheDocument();
// }) 



// test('should find element by data-testid', ()=>{
//     // The header is going to take in a prop, I can also add name if I have two header
//     render(<Header title="My Header"/>) 
//     const headingElement= screen.getByTestId('Olaide')
//     expect(headingElement).toBeInTheDocument();
// }) 



//findBy
// In React Testing Library, the findBy function is used to asynchronously find an element within the DOM tree based on a specific query. 
// It returns a promise that resolves when the element is found or rejects if the element is not found within the specified timeout.

// test('example test', async () => {
//     render(<Header title="My Header" />);
//     const element = await screen.findByText(/My Header/i);
//     expect(element).toBeInTheDocument()
//     // Assertions or further actions with the found element
//   });


  // queryBy
//   In React Testing Library, the queryBy function is used to synchronously find an element within the DOM tree based on a specific query. 
//   It returns the element if found or null if the element is not found.

// test('should find by query', async () => {
//     render(<Header title="My Header" />);
//     const element = screen.queryByText(/My Header/i);
//     expect(element).toBeInTheDocument()
//     // Assertions or further actions with the found element
//   });

//   test('should find by query', async () => {
//     render(<Header title="My Header" />);
//     const element = screen.queryByText(/dog/i);
//     expect(element).not.toBeInTheDocument()
//     // Assertions or further actions with the found element
//   });




  //getAllBy

// In React Testing Library, the getAllBy function is used to synchronously find multiple elements within the DOM tree based on a specific query. 
// It returns an array of elements that match the query.
//   test('should find by getAllBy', async () => {
//     render(<Header title="My Header" />);
//     const element = screen.getAllByRole('heading');
//     expect(element.length).toBe(3)
//     // Assertions or further actions with the found element
//   });