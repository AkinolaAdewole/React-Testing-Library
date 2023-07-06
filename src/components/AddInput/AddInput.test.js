import {screen,render, fireEvent} from '@testing-library/react'
import AddInput from './AddInput'


const mockSetTodo= jest.fn()
describe('Add Input',()=>{
    test('should render input element', async ()=>{
        // The header is going to take in a prop
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodo} />)
        const headingElement= screen.getByPlaceHolderText(/Add a new task here .../i)
        expect(headingElement).toBeInTheDocument();
    })

    test('should be able to type into input', async ()=>{
        // The header is going to take in a prop
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodo} />)
        const headingElement= screen.getByPlaceHolderText(/Add a new task here .../i)
        fireEvent.change(inputElement, {value:"Go Grocery Shopping"})
        expect(headingElement.value).toBe("Go Grocery Shopping");
    })
    
})
