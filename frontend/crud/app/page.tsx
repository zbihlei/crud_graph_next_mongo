"use client"
import  { useEffect } from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    // useEffect(()=>{
    //     const fetchAllTasks = async ()=>{
    //         try{
    //             const res = await axios.get("http://localhost:8800/tasks");
    //             setTasks(res.data);
    //         }catch(err){
    //             console.log(err);
    //         }
    //     }
    //     fetchAllTasks();
    // },[tasks]);

    const handleDelete = async  (id)=>{
    
    }
    const handleUpdateDone = async (id) =>{
       
    }
    const handleUpdateNew = async (id) =>{
      
    }
   

  return (
    <div>
        <h1>
            CRUD TASKS
        </h1>
        <h3>Mongo + GraphQL + Next</h3>

        <div className="tasks">
            {tasks ? tasks.map(task=>(
    
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
            )) : null}
        </div>

        <button className='new'><Link href = "/add">Add new task</Link></button>
    </div>
  )
}

export default Tasks;