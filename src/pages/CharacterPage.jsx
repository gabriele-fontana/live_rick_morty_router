import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Mirage } from 'ldrs/react'
import CharacterCard from "../components/CharacterCard";


export default function CharacterPage() {


  const [character, setCharacter] = useState(null)
  const { id } = useParams()
  console.log(id);

  const api_url = `https://rickandmortyapi.com/api/character/${id}`
  console.log(api_url);



  useEffect(() => {
    fetch(api_url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCharacter(data)

      })
  }, [])
  return (
    <>

      {character === null && <Mirage size="60" speed="2.5" color="black" />}


      {character !== null && (


        <>
          <div className="container">

            <CharacterCard character={character}>
              <div>
                Gender:
                <strong>
                  {character.gender}
                </strong>
              </div>
            </CharacterCard>

          </div>

        </>

      )}


    </>
  )
}