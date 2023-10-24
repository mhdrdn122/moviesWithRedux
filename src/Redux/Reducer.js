import { AllMovies , Movie } from "./type";

const initiValue = {movie:{},movies:[],pageCount:0};

// Function Reducer
export const ReducerMovies = (state=initiValue,action) => {
    switch (action.type){
        case AllMovies :
             return ({movie:action.detailesMovie,movies:action.data , pageCount:action.pages})
        case Movie :
             return ({movie:action.detailesMovie, movies:action.data , pageCount:action.pages})
        default :
            return state

    } 
}