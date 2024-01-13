"use client"

import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {GET_TASKS} from './queries';
import {DELETE_TASK} from './mutations';
import {UPDATE_TASK_STATUS} from './mutations';

if (process.env.NODE_ENV === 'development') { //dev mode only
    loadDevMessages();
    loadErrorMessages();
  }

interface Tasks {
    tasks: Task[];
} 

  interface Task {
    _id: string,
    name: string,
    description: string,
    status: string
  }

const Tasks = () => {

    const { data, loading } =  useQuery(GET_TASKS);
    const firstKey = data ? Object.keys(data)[0] : null;
    const list: Tasks = firstKey ? data[firstKey] : [];

    const [deleteTask] = useMutation(DELETE_TASK);
    const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS);


    const handleDelete = async  (id: string)=>{
      try {
        const { data } = await deleteTask({
          variables: {
            id
          },
          refetchQueries: [{ query: GET_TASKS }],
        });
    
        console.log('task deleted successfully', data);
    
      } catch (error) {
        console.error('Failed to delete task:', error);
      } 
    }
    const handleUpdate = async (id: string, newStatus: string) =>{
      try {
        const { data } = await updateTaskStatus({
          variables: {
            id,
            newStatus
          },
          refetchQueries: [{ query: GET_TASKS }],
        });
    
        console.log('task updated successfully', data);
    
      } catch (error) {
        console.error('Failed to update task:', error);
      } 
    }   
   

  return (
    <div className='wrapp'>
        <h1>
            CRUD TASKS
        </h1>
        <h3>Mongo + GraphQL + Next</h3>

        <div className="tasks">
          {loading ? 
          <div className='loading'>Loading...</div>
          :
        <>
          {list ? 
            list.map((task: Task, index: any)=>(
    
                <div className="task" key = {index}>
                    <div className="upper">
                        <div className='name'>{task.name}</div>
                        <div className='descr'>{task.description}</div>
                    </div>
                    <div className={task.status === 'done' ? 'status_done' : 'status'}><span>{task.status === null ? <div>new</div>: task.status}</span></div>
                    <div className="lower">
                        <button className='delete' onClick={()=>handleDelete(task._id)}>delete</button>
                        {task.status === 'new' ? 
                                                <button className='update' onClick={()=>handleUpdate(task._id, 'done')}>mark as done</button>
                                                :
                                                <button className='update_new' onClick={()=>handleUpdate(task._id , 'new')}>mark as new</button>
                   }
                    </div>
                </div>
            )) : null}

        </>  
        }
        </div>
        {!loading ? 
          <div className="newBtn">
              <button className='new'><Link href = "/add">Add new task</Link></button>
           </div>
      : null}
    </div>


  )
}

export default Tasks;