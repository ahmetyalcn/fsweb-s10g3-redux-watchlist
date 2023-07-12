import {movies} from "../movies";
import { ADD_LIST, REMOVE_LIST, NEXT_MOVIE ,PREVIOS_MOVIE } from "../actions/favAction";
const initialState = {
    movies: movies,
    favMovies: [],
    sira: 0
}

const reducer = (state=initialState, action) =>{
    switch (action.type){
        case ADD_LIST:
            const movie = state.movies[state.sira]
            return{
                ...state,
                sira: state.sira+1,
                favMovies: [...state.favMovies, movie]
            }
        case REMOVE_LIST:
            return{
                ...state,
                favMovies: state.favMovies.filter(movie=> movie.id !== action.payload)
            }
        case NEXT_MOVIE:
            return{
                ...state,
                sira: state.sira+1
        }
        case PREVIOS_MOVIE:
            return{
                ...state,
                sira: state.sira-1
        }
        default:
        return state;
    }
}
export default reducer