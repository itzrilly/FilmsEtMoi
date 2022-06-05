const initialState = { watchedFilm: [] }

function toggleWatch(state = initialState, action){
    let nextState
    switch(action.type){
        case 'TOGGLE_WATCH':
            const watchedFilmIndex = state.watchedFilm.findIndex(item => item.id === action.value.id)
            if(watchedFilmIndex !== -1){
                nextState = {
                    ...state,
                    watchedFilm: state.watchedFilm.filter((item, index) => index != watchedFilmIndex)
                }
            }else {
                nextState = {
                    ...state,
                    watchedFilm: [ ...state.watchedFilm, action.value ]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleWatch