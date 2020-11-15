import React from 'react';
import Table from './components/table';
import Drawer from './components/drawer';
import firestore from './firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [selectedPerson, setSelectedPerson] = React.useState();

  const personsRef = firestore.collection('persons');
  const [persons] = useCollectionData(personsRef, {
    idField: 'id',
  });

  const handlePersonClick = (selected) => {
    setSelectedPerson(selected);
    setDrawerOpened(true);
  };

  const handleClose = () => {
    setSelectedPerson();
    setDrawerOpened(false);
  };

  return (
    <div className="container">
      <div className="page-content">
        <div className="page-content__table-wrapper">
          <Table
            persons={persons || []}
            selected={selectedPerson}
            handleClick={handlePersonClick}
            opened={drawerOpened}
          />
          <Drawer
            drawerOpened={drawerOpened}
            handleClose={handleClose}
            selected={
              persons && persons.find((p) => p.id === selectedPerson?.id)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
