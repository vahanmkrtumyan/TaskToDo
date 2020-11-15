import React from 'react';

const columns = [
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Completion rate (%)',
    field: 'completion',
  },
];

const Table = ({ handleClick, opened, selected, persons }) => {
  const data = persons.map((person) => {
    const { id, name, all, completed } = person;
    const modifiedPerson = {
      id,
      name,
      all,
      completed,
      completion:
        Number(completed) === 0
          ? 0
          : Math.floor((Number(completed) / Number(all)) * 100),
    };
    return modifiedPerson;
  });

  return (
    <div className={opened ? 'opened' : ''}>
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.field}>{c.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr
              className={selected?.id === d.id ? 'selected' : ''}
              key={d.id}
              onClick={() => handleClick(d)}
            >
              <td>{d.name}</td>
              <td>{d.completion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
