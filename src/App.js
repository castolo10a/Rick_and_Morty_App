import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "dguevara@gmail.com";
  const password = "97abcde";
  
  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(()=>{
    !access && navigate("/")
  },)

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div style={{padding: '25px'}}>
        {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
