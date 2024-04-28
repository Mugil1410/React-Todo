import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditTask = ({items,editTask,setEditTask,handleEdit}) => {

    const {id}=useParams();

    const TargetTask= items.find((item) => item.id.toString()===id);
    

    useEffect(() => {
        if (TargetTask) {
          setEditTask(TargetTask.item);
        }
      }, [TargetTask,setEditTask]);
  return (
    <>
    {TargetTask ? <>
        <label htmlFor='editTask'>Edit Task</label>
        <textarea
        name='editTask'
        required
        cols={36}
        rows={6}
        value={editTask}
        onChange={(e) => setEditTask(e.target.value)}
        /> <br/>
        <button onClick={()=>handleEdit(TargetTask.id)}>Submit</button>
        
        </> : 
        <> <h1>Post not found</h1>
        <Link to="/"><button>Add new Task</button></Link>
        </>
    }
    </>
  )
}

export default EditTask
