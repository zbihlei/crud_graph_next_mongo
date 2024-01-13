"use client"
import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import {CREATE_TASK} from '../mutations';
import { useRouter } from 'next/navigation';

const Add = () => {

    const [createTask] = useMutation(CREATE_TASK);
    const router = useRouter();

    const [task , setTask]=useState({
        name: "",
        description: ""
    });


    const handleChange = (e)=>{
        setTask(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async (e) =>{
        e.preventDefault();

        const newTask = {
            name: task.name,
            description: task.description
        }
        try {
            const { data } = await createTask({
              variables: {
                input: {...newTask},
              },
            });
        
            console.log('task saved successfully:', data.createTask);
        
          } catch (error) {
            console.error('Failed to save task:', error);
          }
          finally{
            router.push('/');
          }

     
    }
      return (
    <div className='form'>
        <h1>Add new task</h1>
        <input type="text" placeholder='task name' onChange={handleChange} name='name' />
        <textarea rows="10" type="text" placeholder='task description' onChange={handleChange} name='description' />
        <button className='formbutton' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add