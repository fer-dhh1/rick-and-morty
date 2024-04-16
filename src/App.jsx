import { useEffect, useRef, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationData from './components/LocationData';
import ResidentCard from './components/ResidentCard';

function App() {

  const [inputValue, setinputValue] = useState(Math.floor(Math.random() * 126) + 1);
  const [location, getLocation, isLoading, hasError]  = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
    getLocation(url);
  }, [inputValue]);

  const textInput = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    setinputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = ''
  }

  return (
    <>
      {
        isLoading ?
        <h2>is Loading...</h2>
        :    
        <div className='app'>
          <div className="header">
            <img src="src\logo2.png" alt="" />
          </div>
          <form className = 'app__form' onSubmit={handleSubmit}>
            <input className = 'app_input' type="text" ref = {textInput}/>
            <button class="btn-76">
                Search
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
          </form>
          {
            hasError || inputValue === '0' ?
              <h2>❌Hey! you must provide an ID from 1 to 126 </h2>
              :
              <>
                <LocationData
                  location = {location}
                  />
                  <div className='app__container'>
                    {
                      location?.residents.map(resident => (
                        <ResidentCard
                        key = {resident}
                        url = {resident}
                        />
                      ))
                    }
                  </div>
              </>
          }
       </div>
      }

   </>
   
  )
}

export default App;