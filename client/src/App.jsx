
import { useEffect, useState } from 'react';
import './App.css'
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Searchbar from './component/Searchbar';
import List from './component/List';

function App() {
  const [data, setData] = useState('');
  const [newdata, setNewdata] = useState('')
  return (
    <>
      <Toaster />
      <div className="App" >
        <Searchbar data={data} setData={setData} setNewdata={setNewdata}/>

        <div className="item-list">
          <List newdata={newdata}/>
        </div>
      </div>
    </>
  )
}

export default App
