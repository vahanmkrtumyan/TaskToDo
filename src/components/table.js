import React from 'react';


const Table = ({handleClick, opened, selected}) => {
  const data = [
    { name: "John", completion: 72, id:1 },
    { name: "Bren", completion: 62, id:2 },
    { name: "Marry", completion: 24, id:3 },
    { name: "Shohail", completion: 38, id:4 },
    { name: "Aseka", completion: 42, id:5 },
    { name: "Meuko", completion: 11, id:6 },
  ];

  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Completion rate (%)",
      field: "completion",
    }
  ];

  const classname =  opened ? 'opened' : '';

  return (
    <div className={classname}>
      <table>
        <thead>
          <tr>
            {columns.map(c => 
            <th key={c.field}>{c.title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map(d => 
            <tr className={selected && selected.id === d.id ? 'selected': ''} key={d.id} onClick={() => handleClick(d)}>
              <td>{d.name}</td>
              <td>{d.completion}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;


