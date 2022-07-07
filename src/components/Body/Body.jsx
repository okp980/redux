import React from 'react'
import { useSelector } from 'react-redux';
import EditForm from '../EditForm/EditForm'
import TodoItem from '../TodoItem/TodoItem'


const Body = () => {
    const show = useSelector((state) => state.formShow.show);


    const toItem = {
        todo: 'well',
        date: '12/3/2022',
        img: 'https://time.com/subject/person-of-the-year/'
    }


    return (
        <div>
            {!show ? <TodoItem {...toItem} /> : <EditForm />}
        </div>
    )
}

export default Body