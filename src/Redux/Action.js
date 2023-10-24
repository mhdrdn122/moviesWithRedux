import { AllMovies ,Movie, LinkApi} from "./type";
import axios from "axios";

// function get All Movies
export const getAllMovies = () => {

    return async (dispatch) => {
        const res = await axios.get(LinkApi)
        dispatch({ type:AllMovies,detailesMovie:{},data:res.data.results ,pages:res.data.total_pages})
    }
}

// function get Movies with sertch
export const getSertchMovies = (word) => {

    const LinkApiSertch = `https://api.themoviedb.org/3/search/movie?api_key=bb78c3f6e7bd0dd9b45d1a43a1ca46b1&query=${word}&language=ar-US`
  
    return async (dispatch) => {
        const res = await axios.get(LinkApiSertch)
        dispatch({ type:AllMovies,detailesMovie:{},data:res.data.results ,pages:res.data.total_pages})
    }
}

// function get pages 
export const getPageMovies = (page) => {
   
    const LinkApiPage = `https://api.themoviedb.org/3/movie/popular?api_key=bb78c3f6e7bd0dd9b45d1a43a1ca46b1&language=ar-US&page=${page}`

    return async (dispatch) => {
    const res = await axios.get(LinkApiPage)
    dispatch({ type:AllMovies,detailesMovie:{},data:res.data.results ,pages:res.data.total_pages})
    }
}

// function get Movies detailes
export const getDetailesMovies = (id_Movies) => {
   
    const  LinkApiMovies = `https://api.themoviedb.org/3/movie/${id_Movies}?api_key=bb78c3f6e7bd0dd9b45d1a43a1ca46b1&language=ar-US`
    return async (dispatch) => {
    const res = await axios.get(LinkApiMovies)
    dispatch({ type:Movie,detailesMovie:res.data, data:[] ,pages:0})
    }
}

