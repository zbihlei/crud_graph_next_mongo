import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [task , setTask]=useState({
        name: "",
        title: ""
    });
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setTask(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async e =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/tasks",  task);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
      return (
    <div className='form'>
        <h1>Add new task</h1>
        <input type="text" placeholder='task name' onChange={handleChange} name='name' />
        <textarea rows="10" type="text" placeholder='task description' onChange={handleChange} name='title' />
        <button className='formbutton' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add