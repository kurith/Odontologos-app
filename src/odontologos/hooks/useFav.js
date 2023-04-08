import { useEffect, useReducer } from "react";
import { favReducer } from "../helpers/favReducer";


const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem('favs')) || [];
}

export const useFav = () => {
    
    const [ favs, dispatch ] = useReducer( favReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify( favs ));
      
    }, [favs])

    const handleNewFav = ( fav ) => {
        const action = {
            type: '[FAV] Add fav',
            payload: fav
        }

        dispatch( action )
    }

    const handleDeleteFav = ( id ) => {
        dispatch({
            type: '[FAV] Remove fav',
            payload: id
        })
    }

    return {
        favs,
        favsCount: favs.length,

        handleNewFav,
        handleDeleteFav,

    }
    


}
