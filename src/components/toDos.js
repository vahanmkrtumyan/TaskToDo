import React from 'react';
import completedIcon from '../assets/images/completed.svg';
import pendingIcon from '../assets/images/pending.svg';



const ToDos = ({data}) => {
  data.sort((a, b) => a.completed - b.completed );
  
const completed = (
  <div className='status completed'>
    <img src={completedIcon} alt='completed'/>
    <p>Completed</p>
  </div>
);

const pending = (
  <div className='status pending'>
    <img src={pendingIcon} alt='pending'/>
    <p>Pending</p>
  </div>
);

  return (
    <>
    {data.map(todo => (
      <div key={todo.id} className='todo'>
      <div className='todo_body'>
        {todo.completed ? completed: pending}
      <p>{todo.title}</p>
      </div>
      <div>
        <button
          disabled={todo.completed}
          className={todo.completed ? 'disabled': ''}
          onClick={() => console.log(todo)}
        >
          Mark as done
        </button>
      </div>
    </div>
    )) 
    }
    </>
  )
}

export default ToDos;


