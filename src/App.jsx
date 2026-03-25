import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState, useEffect} from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import ContactsPage from './pages/ContactsPage'
import CharacterPage from "./pages/CharacterPage"
import { GlobalProvider } from './contexts/GlobalContext'


function App() {



  const api_url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState(null) // its an array


  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data); // its an object 
        // store the response insie the characters reactive variable
        setCharacters(data) // characters is an object

      })
  }

  useEffect(() => {
    // fetch data here
    fetchData(api_url)
  }, [])




  return (
    <>
      

      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/characters/:id" element={<CharacterPage />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
      
    </>
  )
}

export default App
