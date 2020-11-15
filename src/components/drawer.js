import React from 'react';
import firestore from '../firebase';
import ToDos from './toDos';
import closeIcon from '../assets/images/close.svg';
import completedIcon from '../assets/images/completed.svg';
import plusIcon from '../assets/images/plus.svg';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Drawer = ({ selected, drawerOpened, handleClose }) => {
  const [inputOpen, setInputOpen] = React.useState(false);
  const [newToDo, setNewToDo] = React.useState('');

  const todosRef = firestore
    .collection('todos')
    .where('person', '==', selected ? selected.id : '');
  const [todos] = useCollectionData(todosRef, { idField: 'id' });

  const handleToDoAdd = () => {
    if (!newToDo) {
      return;
    }
    const addBatch = firestore.batch();
    const personRef = firestore.collection('persons').doc(selected?.id);
    const todosRef = firestore.collection('todos').doc();
    addBatch.update(personRef, {
      all: selected.all ? selected.all + 1 : 1,
    });
    addBatch.set(todosRef, {
      title: newToDo,
      person: selected.id,
      completed: false,
    });
    addBatch.commit().then(function () {
      setNewToDo('');
    });
  };

  const handleMark = (id) => {
    const addBatch = firestore.batch();
    const personRef = firestore.collection('persons').doc(selected?.id);
    const todosRef = firestore.collection('todos').doc(id);
    addBatch.update(personRef, {
      completed: selected.completed ? selected.completed + 1 : 1,
    });
    addBatch.update(todosRef, {
      completed: true,
    });
    addBatch.commit();
  };

  const handlePlusClick = () => {
    if (inputOpen) {
      handleToDoAdd();
    } else {
      setInputOpen(true);
    }
  };

  const onClose = () => {
    handleClose();
    setInputOpen(false);
  };

  return (
    <div className={`table-drawer ${drawerOpened && 'opened'}`}>
      <div className="table-drawer__top-buttons">
        <div
          className={`table-drawer__input-wrapper ${inputOpen ? 'open' : ''}`}
        >
          <input
            onChange={(e) => setNewToDo(e.target.value)}
            value={newToDo}
            placeholder="New to-do description"
          />
          <button onClick={handlePlusClick}>
            <img
              src={inputOpen ? completedIcon : plusIcon}
              alt={inputOpen ? 'confirm' : 'plus'}
            />
          </button>
        </div>
        <img onClick={onClose} src={closeIcon} alt="close" />
      </div>
      <p className="table-drawer__title">{`To-do list for ${selected?.name}`}</p>
      <ToDos handleMark={handleMark} data={todos} />
    </div>
  );
};

export default Drawer;
