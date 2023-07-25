import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        const fetchAllTasks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/tasks");
                setTasks(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllTasks();
    },[tasks]);

    const handleDelete = async  (id)=>{
        try{
            await axios.delete("http://localhost:8800/tasks/" +id)
        }catch(err){
            console.log(err);
        }
    }
    const handleUpdateDone = async (id) =>{
        let tskdone = {done: 'done'}
        try{
            await axios.put("http://localhost:8800/tasks/"+id, tskdone);
        }catch(err){
            console.log(err);
        }
    }
    const handleUpdateNew = async (id) =>{
        try{
            await axios.put("http://localhost:8800/tasks/"+ id, null);
        }catch(err){
            console.log(err);
        }
    }
   

  return (
    <div>
        <h1>
            CRUD TASKS
        </h1>
        <h3>MySQL + React.js + Express</h3>

        <div className="tasks">
            {tasks.map(task=>(
    
                <div className="task" key = {task.id}>
                    <div className="upper">
                        <div>{task.name}</div>
                        <div>{task.title}</div>
                    </div>
                    <div className={task.done === 'done' ? 'status_done' : 'status'}><span>{task.done === null ? <div>new</div>: task.done}</span></div>
                    <div className="lower">
                        <button className='delete' onClick={()=>handleDelete(task.id)}>delete</button>
                        {task.done === null ? 
                                                <button className='update' onClick={()=>handleUpdateDone(task.id)}>mark as done</button>
                                                :
                                                <button className='update_new' onClick={()=>handleUpdateNew(task.id)}>mark as new</button>
                   }
                    </div>
                </div>
            ))}
        </div>

        <button className='new'><Link to = "/add">Add new task</Link></button>
    </div>
  )
}

export default Tasks;