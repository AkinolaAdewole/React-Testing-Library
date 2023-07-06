import {screen,render} from '@testing-library/react'
import AddInput from './AddInput'


const mockSetTodo= jest.fn()
describe('Add Input',()=>{
    test('should render same text passed into title prop', async ()=>{
        // The header is going to take in a prop
        render(<AddInput 
            todos={[]}
            setTodos={mockSetTodo} />)
        const headingElement= screen.getByPlaceHolderText(/Add a new task here .../i)
        expect(headingElement).toBeInTheDocument();
    })
})
