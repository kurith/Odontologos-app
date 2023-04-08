

export const favReducer = ( initialstate = [], action) => {
    
    switch ( action.type ) {
        case '[FAV] Add fav':
            return [ ...initialstate, action.payload ]

        case '[FAV] Remove fav':
            return initialstate.filter( fav => fav.id !== action.payload )
    
        default:
            return initialstate;
    }
}
