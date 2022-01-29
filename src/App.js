import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header.js';
import PunkList from './components/PunkList.js'
import Main from './components/Main.js';

function App() {
  const [punkList, setPunkList] = useState([])
  const [activePunk, setActivePunk] = useState({})

  useEffect(() => {
    axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xa933c3c479228EAAB4d9ab044903e1bB726D0A2b&order_direction=asc')
    .then(response => {
      setPunkList(response.data.assets)
      setActivePunk(response.data.assets[0])
    })
  }, [])

  const changeActivePunk = (index) => {
    setActivePunk(punkList[index])
  }

  return (
    <div className='app'>
      <Header />
      {punkList.length > 0 && (
        <>
          <Main activePunk={activePunk} />
          <PunkList punkList={punkList} setActivePunk={changeActivePunk} />
        </>
      )}
    </div>
  );
}

export default App;
