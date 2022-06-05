const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if(favoriteFilmIndex !== -1){ // s'il existe déjà
                // suppression du film des favoris
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item, index) => index != favoriteFilmIndex)
                }
            }else { // sinon
                // ajout du film dans les favoris
                nextState = {
                    ...state,
                    favoritesFilm: [ ...state.favoritesFilm, action.value ]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite