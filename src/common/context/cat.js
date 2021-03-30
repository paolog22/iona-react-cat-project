import React, { createContext, useState } from 'react';

export const CatContext = createContext();

export const CatProvider = (props) => {
    const [breedList, setBreed] = useState([])
    const [catList, setCat] = useState([])
    const [breedId, setbreedId] = useState('')
    const [hasError, setHasError] = useState(false)

    const state = {
        breed: {breedList, setBreed, breedId, setbreedId},
        cat: {catList, setCat},
        alert: {hasError, setHasError}
    }
    
    return (
        <CatContext.Provider value={state}>
            {props.children}
        </CatContext.Provider>
    )
}