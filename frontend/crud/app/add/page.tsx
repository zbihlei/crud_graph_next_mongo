"use client"
import React from 'react'
import { useState } from 'react'

const Add = () => {

    const [task , setTask]=useState({
        name: "",
        title: ""
    });
    const handleChange = (e)=>{
        setTask(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async e =>{
        e.preventDefault();
     
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