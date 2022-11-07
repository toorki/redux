import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { addTodo } from '../redux/actions/todoActions'

const AddTodo = () => {
    const [input, setInput]=useState("")
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
    const dispatch=useDispatch()
  return (
    <div>
        <form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter email"  value={input} onChange={(e)=>handleInput(e)} />
      </Form.Group>
      <Button variant="primary" onClick={(e)=>dispatch(addTodo({ id:Math.random(), text:input}))(e.preventDefault(e))} >
        Add
      </Button>
        </form>
    </div>
  )
}

export default AddTodo