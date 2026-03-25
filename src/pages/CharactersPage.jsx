

import CharactersList from "../components/CharactersList"

export default function CharactersPage() {

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

      

      <CharactersList />
      


    </>

  )
}