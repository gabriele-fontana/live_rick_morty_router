import { useEffect, useState } from "react"

import CharactersList from "../components/CharactersList"

export default function CharactersPage() {

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

      <div className="p-5 mb-4 bg-white">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Rick & Morty</h1>
          <p className="col-md-8 fs-4">
            Rick and Morty is an animated series following the adventures of an eccentric scientist and his good-hearted but easily influenced grandson. Explore the universe and meet bizarre characters from countless dimensions.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Find out more
          </button>
        </div>
      </div>

      {/* /.jumbotron */}

      <CharactersList characters={characters} />
      


    </>

  )
}