import { useContext } from "react"

import { useGlobal } from "../contexts/GlobalContext"


export default function CharacterCard({ character, children }) {

 
 const { favourites, addFavourite, isFavourite,  } = useGlobal()


  return (

    <div className="col">
      <div className="card h-100">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h3>{character.name}</h3>
          <button className="btn" onClick={()=> addFavourite(character.id)}>
            <i className={`bi bi-heart${isFavourite(character.id, favourites) ?'-fill' : ''}`}></i>
          </button>
          <div>
            status:
            <strong>{character.status}</strong>
          </div>
          <div>
            specie:
            <strong>{character.species}</strong>
          </div>

          {children}

        </div>
      </div>
    </div>
  )
}