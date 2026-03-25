import { createContext, useContext, useState } from "react";




const GlobalContext = createContext()




function GlobalProvider({ children }){
    
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
    
    
    

    const [favourites, setFavourites] = useState([])
    
    function addFavourite(id) {
        console.log('add to favourites');
        // where is the character id?
        //console.log(id);

        //console.log(favourites.includes(id)); // true|false
        if (!favourites.includes(id)) {
            setFavourites([...favourites, id])

        } else {
            // filter the results (remove the given id from the favourites array)
            // create a variable where store the new filtered array

            const filtered = favourites.filter(item => item != id)
            setFavourites(filtered)

        }

    }


    function isFavourite(id, favourites) {
        // Check if the character is favourite or not
        if (favourites.includes(id)) {
            return true
        }
        return false
    
    }
    return(
        <GlobalContext.Provider value={{
            favourites,
            addFavourite,
            isFavourite,
            fetchData, 
            api_url, 
            characters,
            

        }}>
            {children}
        </GlobalContext.Provider>
    )

}

function useGlobal(){
    const context = useContext(GlobalContext)

    return context
    
}

export { GlobalProvider, useGlobal}