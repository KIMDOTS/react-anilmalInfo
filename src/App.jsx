import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from "./page/Main"
import Detail from "./page/Detail"
import Search from "./page/Search"

function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1>🐶 Animal Like 🐰</h1>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={() => navigate(`search?animal=${inputValue}`)}>Search</button>
        </header>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      <footer>all rights reserved to OZ</footer>
    </>
  )
}

export default App
