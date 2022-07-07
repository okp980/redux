import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../store/features/showForm/ShowFormSlice';
import { addTodo, editTodo, removeTodo } from '../../store/features/todo/todoSlice'
import { AiTwotoneDelete } from "react-icons/ai";

const EditForm = () => {
    const initialValues = {
        todo: '',
        date: '',

    }

    const singleTodo = useSelector(state => state.todos.singleTodo)

    const [values, setValues] = useState(initialValues);
    const dispatch = useDispatch()

    // assign values to the form if singleTodo field is not falsy
    useEffect(() => {
        if (singleTodo) {
            setValues(singleTodo)
        }
    }, [singleTodo])

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }
    const deleteTodo = () => { dispatch(removeTodo({ id: singleTodo.id })); dispatch(toggleState()) }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (singleTodo) {
            dispatch(editTodo({ todo: values }))
            dispatch(toggleState())
            return
        }
        if (values.todo.length === 0 || values.date.length === 0 || values.time.length === 0 || values.user.length === 0) {
            alert('Please make sure all fields are filled')
            return
        }
        dispatch(addTodo({ ...values, id: Math.random() }))
        dispatch(toggleState())
        setValues(initialValues)

    }
    return (
        <div className=' body py-3'>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-sm-left lh-base font-normal text-capitalize text-decoration-none text-reset mb-1'>test description</Form.Label>
                            <Form.Control type="text" placeholder="Follow up" value={values.todo} name='todo' onChange={handleChange} />
                        </Form.Group>



                    </Row>

                    <Row >
                        <Col className='w-50'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text-sm-left lh-base font-normal text-capitalize text-decoration-none text-reset mb-1'>date</Form.Label>
                                <Form.Control type="date" value={values.date} name='date' onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col className='w-50'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text-sm-left lh-base font-normal text-capitalize text-decoration-none text-reset mb-1'>time</Form.Label>
                                <Form.Control type="time" value={values.time} name='time' onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text-sm-left lh-base font-normal text-capitalize text-decoration-none text-reset mb-1'>Assign User</Form.Label>
                                <Form.Select value={values.user} name='user' onChange={handleChange}>
                                    <option value=''>Select user</option>
                                    <option value="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.investnational.com.au%2Fwp-content%2Fuploads%2F2016%2F08%2Fperson-stock-2.png&imgrefurl=https%3A%2F%2Fwww.investnational.com.au%2Fslider%2Fabout-us%2Fperson-stock-2%2F&tbnid=7-dVo5ati0qmoM&vet=12ahUKEwjAkY7J_ub4AhWN0oUKHfGLBT8QMygQegUIARD7AQ..i&docid=r7fqmLxJUOaogM&w=497&h=502&q=person&ved=2ahUKEwjAkY7J_ub4AhWN0oUKHfGLBT8QMygQegUIARD7AQ">Prem Kumar</option>
                                    <option value="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.investnational.com.au%2Fwp-content%2Fuploads%2F2016%2F08%2Fperson-stock-2.png&imgrefurl=https%3A%2F%2Fwww.investnational.com.au%2Fslider%2Fabout-us%2Fperson-stock-2%2F&tbnid=7-dVo5ati0qmoM&vet=12ahUKEwjAkY7J_ub4AhWN0oUKHfGLBT8QMygQegUIARD7AQ..i&docid=r7fqmLxJUOaogM&w=497&h=502&q=person&ved=2ahUKEwjAkY7J_ub4AhWN0oUKHfGLBT8QMygQegUIARD7AQ">John Doe</option>
                                    <option value="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa0%2FPierre-Person.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APierre-Person.jpg&tbnid=P_Uy_MtHd56w0M&vet=12ahUKEwjAkY7J_ub4AhWN0oUKHfGLBT8QMygTegUIARCCAg..i&docid=g3Pw6Esp3IHlMM&w=2272&h=3408&q=person&ved=2ahUKEwjAkY7J_ub4AhWN0oUKHfGLBT8QMygTegUIARCCAg">John</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row><Col>

                        {singleTodo && <AiTwotoneDelete className='fs-4 text-danger' onClick={deleteTodo} />}                    </Col>
                        <Col className=" d-flex justify-content-end">
                            <Button variant="light" type="reset" className='editForm' onClick={() => dispatch(toggleState())} >
                                Cancel
                            </Button>
                            <Button variant="success" type="submit" className='editForm'>
                                {singleTodo ? 'Edit' : 'Save'}
                            </Button>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </div >


    )
}

export default EditForm;