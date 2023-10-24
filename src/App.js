import { useState , useEffect } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import { useSelector ,useDispatch } from 'react-redux';
import { getAllMovies } from './Redux/Action';

import NavBar from './Componenet/NavBar/NavBar';
import Cards from './Componenet/Cards/Cards';
import MoviesDetailes from './Componenet/MoviesDetailes/MoviesDetailes';

import { Container } from 'react-bootstrap';
import './App.css';


function App()  {

  const [movies , setMovies] = useState([])
  const hrefCounter = window.location.href.length
  let disabledNav = false
 

  const dispatch = useDispatch()
  const mov = useSelector(state => state.movies)

  useEffect( () =>  {
    dispatch(getAllMovies())
  }  ,[])

  useEffect( () =>  {setMovies(mov)} ,[mov] )


  // Toggle  disabled input search between show all movies and show movie details
  function disabledInput ()  {
    if(hrefCounter>22)
      return disabledNav = true
        
    else
        return disabledNav = false  
  }

  return (
  
    <div>
     <NavBar disabledInput={disabledInput} />
      <Container  >

        <BrowserRouter >
              <Routes>
                  <Route path='/' element={<Cards />} />
                  <Route path='/movies/:id' element={<MoviesDetailes/>} />  
              </Routes>
        </BrowserRouter>
      </Container>
    </div>

  )
}

export default App;
