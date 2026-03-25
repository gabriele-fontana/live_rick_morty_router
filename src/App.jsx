import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState, useEffect, use} from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import ContactsPage from './pages/ContactsPage'
import CharacterPage from "./pages/CharacterPage"
import { GlobalProvider } from './contexts/GlobalContext'
import { useGlobal } from "./contexts/GlobalContext"

function App() {



  




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
