import React from 'react'
import Table from './components/table';
import Drawer from './components/drawer';

function App() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [selectedPerson, setSelectedPerson] = React.useState();

  const handlePersonClick = (selected) => {
    setSelectedPerson(selected)
    setDrawerOpened(true);
  };

  const handleClose = () => {
    setSelectedPerson()
    setDrawerOpened(false);
  };
  

  return (
    <div className='container'>
      <div className='page-content'>
        <div className='table-wrapper'>
        <Table selected={selectedPerson} handleClick={handlePersonClick} opened={drawerOpened}/>
        <Drawer drawerOpened={drawerOpened} handleClose={handleClose} selected={selectedPerson}/>
        </div>
      </div>
    </div>
  );
}

export default App;
