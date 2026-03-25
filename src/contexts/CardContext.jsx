import { createContext, useContext, useState  } from "react";

const CardContext = createContext()

function CardProvider(){

    return(

    )
}
function useCard(){
    const context = useContext(CardContext)
    return context
}

export {CardProvider, useCard}
