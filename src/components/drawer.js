import React from 'react';
import ToDos from './toDos';
import closeIcon from '../assets/images/close.svg'
import completedIcon from '../assets/images/completed.svg';
import plusIcon from '../assets/images/plus.svg';



const Drawer = ({selected, drawerOpened, handleClose}) => {
    
  const [inputOpen, setInputOpen] = React.useState(false);

  const handlePlusClick = () => {
    setInputOpen(true);
  }


  const onClose = () => {
    handleClose();
    setInputOpen(false);
  }

  const plus = <img src={plusIcon} alt='plus'/>;
  const confirm = <img src={completedIcon} alt='confirm'/>;

  console.log(inputOpen)

  const data = [
      {
        id:1,
        completed: true,
        title: 'Hello world',
      },
      {
        id:2,
        completed: false,
        title: 'Hello Vahan',
      },
      {
        id:2,
        completed: false,
        title: 'Hello Vahan',
      },
      {
        id:2,
        completed: false,
        title: 'Hello Vahan',
      },
      {
        id:2,
        completed: false,
        title: 'Hello Vahan',
      },
      {
        id:2,
        completed: false,
        title: 'Hello Vahan',
      },
    ]


  return (
    <div className={`table-drawer ${drawerOpened && 'opened'}`}>
      <div className='top_buttons'>
        <div style={{display: 'flex'}}>
          <input className={inputOpen ? 'inputOpen': ''} placeholder='New to-do description'></input>
          <button onClick={() => handlePlusClick()}>{inputOpen ? confirm: plus}</button>
        </div>
        <img onClick={() => onClose()} src={closeIcon} alt='close'/>
      </div>
      <p className='title'>{`To-do list for ${selected && selected.name}`}</p>
      <ToDos data={data}/>
    </div>
  )
}

export default Drawer;


