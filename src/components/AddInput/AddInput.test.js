import {screen,render} from '@testing-library/react'
import AddInput from './AddInput'

describe('Add Input',()=>{
    test('should render same text passed into title prop', async ()=>{
        // The header is going to take in a prop
        render(<AddInput title="My Header" />)
        const headingElement= screen.getByPlaceHolderText(/My Header/i)
        expect(headingElement).toBeInTheDocument();
    })
})
