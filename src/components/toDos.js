import React from 'react';
import completedIcon from '../assets/images/completed.svg';
import pendingIcon from '../assets/images/pending.svg';

const ToDos = ({ data, handleMark }) => {
  if (data && data[0]) {
    data.sort((a, b) => a.completed - b.completed);
  }

  const completed = (
    <div className="todo__status completed">
      <img src={completedIcon} alt="completed" />
      <p>Completed</p>
    </div>
  );

  const pending = (
    <div className="todo__status pending">
      <img src={pendingIcon} alt="pending" />
      <p>Pending</p>
    </div>
  );

  return (
    <>
      {data &&
        data.map((todo) => (
          <div key={todo.id} className="todo">
            <div className="todo__body">
              {todo.completed ? completed : pending}
              <p className="todo__title">{todo.title}</p>
            </div>
            <button
              disabled={todo.completed}
              className={`todo__button ${todo.completed ? 'disabled' : ''}`}
              onClick={() => handleMark(todo.id)}
            >
              Mark as done
            </button>
          </div>
        ))}
    </>
  );
};

export default ToDos;
