import { useState } from 'react';
import Terrorists from './components/Terrorists';
import Filter from './components/Filter';
// import Search from './components/Search';
import data from './data/data.json';
import './App.css';

function App() {
  return (
    <>
      <Filter data={data} />
      {/* <Search  /> */}
      <Terrorists data={data}></Terrorists>
    </>
  );
}

export default App;
