import {screen,render, fireEvent} from '@testing-library/react'
import AddInput from './AddInput'


// Integration tests in React with TypeScript involve testing the interaction and behavior of multiple components and their integration with each other. 
// These tests focus on ensuring that the components work correctly together, simulating user actions, and verifying the expected outcomes.


const mockSetTodo= jest.fn()
describe('Add Input',()=>{
    test('should render input element', async ()=>{
        // The header is going to take in a prop
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodo} />)
        const headingElement= screen.getByPlaceholderText(/Add a new task here .../i)
        expect(headingElement).toBeInTheDocument();
    })

    test('should be able to type into input', async ()=>{
        // The header is going to take in a prop
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodo} />)
        const inputElement= screen.getByPlaceholderText(/Add a new task here .../i)
        fireEvent.change(inputElement, {target:{value:"Go Grocery Shopping"}})
        expect(inputElement.value).toBe("Go Grocery Shopping");
    })
    
})
