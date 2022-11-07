import React, {useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo } from '../redux/actions/todoActions'

const EditTodo = ({todo}) => {
    const [show, setShow]=useState(false)
    const handleShow=(e)=>{
    setShow(!show)
    }
    const slct=useSelector(state=>state)
    const [cred, setCred]=useState(slct.text)
    const handleText=(e)=>{
        setCred(e.target.value)
    }
    const dispatch=useDispatch()
  return (
    <div className='edit'>
        <Button variant="primary" onClick={handleShow}>
            Edit Todo
        </Button>
        <Modal show={show} onHide={handleShow} animation={false}>
            <Form.Control value={cred} onChange={handleText} />
            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>dispatch(editTodo({id:todo.id,text:cred}))}>
            Save Changes
          </Button>
            </Modal.Footer>

        </Modal>
    </div>
  )
}

export default EditTodo