import { Link } from "react-router-dom"
import CharacterCard from "./CharacterCard"
import { Mirage } from 'ldrs/react'

export default function CharactersList({characters}){

  return (
    <section className="characters">
      <div className="container">

        {characters === null && <Mirage size="60" speed="2.5" color="black" />}


        {characters !== null &&
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {characters?.results.map(character =>

              <CharacterCard key={character.id} character={character} >
                <Link to={`/characters/${character.id}`}>View Character</Link>
              </CharacterCard>

            )}
          </div>

        }


      </div>

    </section>
  )
}