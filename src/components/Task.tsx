import React from "react"
import {FaTrashAlt} from "react-icons/fa"
import {AiOutlineCheckCircle, AiFillCheckCircle} from "react-icons/ai"
import { ITask } from "types/ITask"

interface ITaskSingle {
  task: ITask,
  completeTask: (arg0: string) => void,
  deleteTask: (arg0: string) => void
}

const Task: React.FC<ITaskSingle> = (
  {
    task, 
    completeTask, 
    deleteTask
  }) => {
  return (
    <li key={task.id}>
      <div className="content">
        <span className="task-icon">
          {task.isCompleted ?
          <AiFillCheckCircle size={"30px"} onClick={() => completeTask(task.id)}/>  
          : <AiOutlineCheckCircle size={"30px"} onClick={() => completeTask(task.id)}/>}
        </span>
        <span className="task-txt" style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}>{task.text}</span>
      </div>
      <span className="delete">
        <FaTrashAlt
          size={"30px"} 
          onClick={() => deleteTask(task.id)}
        />
      </span>
    </li>
  )
}

export default Task