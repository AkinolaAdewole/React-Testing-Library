import {screen,render} from '@testing-library/react'
import TodoFooter from './TodoFooter'
import {BrowserRouter} from "react-router-dom"

const MockTodoFooter=({numberOfIncompleteTasks})=>{
   return (
                <BrowserRouter>
                        <TodoFooter 
                        numberOfIncompleteTasks={ numberOfIncompleteTasks} />
               </BrowserRouter>
   )
}
test('should render correct amount of incomplete task', async ()=>{
    // The header is going to take in a prop
    render(<MockTodoFooter 
        numberOfIncompleteTasks={5} />)

    const paragraphElement= screen.getByText(/5 task left/i)
    expect(paragraphElement).toBeInTheDocument();
})