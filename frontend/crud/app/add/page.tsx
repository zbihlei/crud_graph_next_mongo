"use client"
import React, {ChangeEvent} from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import {CREATE_TASK} from '../mutations';
import { useRouter } from 'next/navigation';
import {  GET_TASKS} from '../queries';


const Add = () => {

    const [createTask] = useMutation(CREATE_TASK);
    const router = useRouter();

    const [task , setTask]=useState({
        name: "",
        description: ""
    });


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setTask(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) =>{
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
              refetchQueries: [{ query: GET_TASKS }],
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
        <textarea rows={10}  placeholder='task description' onChange={handleChange} name='description' />
        <button className='formbutton' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add