import React, { useEffect, useState } from 'react';
import './style.css';
import { updatedData } from './data-transformer';
import { data } from './data';

const options = [
  { label: 'Select', value: '' },
  { label: 'productName', value: 'product' },
  { label: 'ID', value: 'ID' },
  { label: 'Description', value: 'desc' },
];

export default function App() {
  const [tableInfo, setData] = React.useState([]);
  const [item, setItem] = React.useState('');
  useEffect(() => {
    const test = updatedData(data);
    setData(test);
  }, []);

  const handleSelect = (e) => {
    console.log(e.target.value);
    setItem(e.target.value);
    if (e.target.value != '') {
      sortData(e.target.value);
    }
  };

  const sortData = (name) => {
    console.log(name);
    const sortedData = tableInfo.sort(function (a, b) {
      if (a[name] > b[name]) {
        return -1;
      }
      if (a[name] < b[name]) {
        return 1;
      }
      return 0;
    });

    console.log(sortedData);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <select options={options} value={item} onChange={handleSelect}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <br />

      <br />
      <table>
        <thead>
          <tr>
            <th> productName </th>
            <th> ID </th>
            <th> Description </th>
          </tr>
        </thead>
        {tableInfo &&
          tableInfo.map((item) => (
            <tr key={item.ID}>
              <td>{item.product} </td>
              <td>{item.ID} </td>
              <td>{item.desc} </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
