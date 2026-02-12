import { useState } from 'react';
import Terrorists from './components/Terrorists';
import Filter from './components/Filter';
import NameSearch from './components/NameSearch';
import NumSearch from './components/NumSearch';
import data from './data/data.json';
import './App.css';

function App() {
  const [list, setList] = useState(data);

  const nameSearch = (name) => {
    const newList = data.filter((item) => item.name.includes(name));
    setList(newList);
  };

  const numSearch = (num) => {
    const newList = data.filter((item) => item.attacksCount === num);
    setList(newList);
  };

  const statusFilter = (status) => {
    const newList = data.filter(
      (item) => item.status == status || status === 'all',
    );
    setList(newList);
  };

  return (
    <>
      <Filter filter={statusFilter} />
      <NameSearch nameSearch={nameSearch} />
      <NumSearch numSearch={numSearch} />
      <Terrorists data={list}></Terrorists>
    </>
  );
}

export default App;
