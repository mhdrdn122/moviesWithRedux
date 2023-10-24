import { useParams } from "react-router-dom"
import { useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux"
import { getDetailesMovies } from "../../Redux/Action"

import { Row ,Col, Button} from "react-bootstrap"
import './MoviesDetailes.css'
import NotFound from "../NotFound/NotFound"



const MoviesDetailes = () => {
    const idMovies = useParams()
    const dispatch = useDispatch()
    const movieDetailes = useSelector(state => state.movie)
    useEffect( () => {dispatch(getDetailesMovies(idMovies.id))} ,[])

 
  if( movieDetailes.title)             
        return (
            < >
                <Row  sm={12} lg={12} md={12} className="my-5  sectionStyle p-5">
                    <Col sm={12} lg={4} md={6} className="h-50" >
                    <img variant="top" className="w-100 h-50 card" src={`https://image.tmdb.org/t/p/w500/${movieDetailes.poster_path}`} alt="imag"/> 

                    </Col>

                    <Col sm={12} lg={8} md={6} >
                        <div className=' movieInfo   text-center' >
                                    <p>اسم الفلم : {movieDetailes.title} </p>
                                    <p>تاريخ الاصدار : {movieDetailes.release_date}</p>
                                    <p> عدد المقيمين : {movieDetailes.vote_count}  </p>
                                    <p>التقييم : {movieDetailes.vote_average}</p>

                        </div>
                    
                    </Col>

                </Row>

                <Row>
                    <div  className="overview sectionStyle ">
                        <p className="">القصة :</p>
                        <p>{movieDetailes.overview}</p>
                    </div>
                                    
                </Row>

                <Row >

                <div className="d-flex justify-content-evenly  btnShowMovie p-5 my-3" >
                        <a href="/">
                                    <button className="btnDetailes p-3"> العودة الى الخلف</button>
                            </a>
                        
                </div>

                </Row>

            </>
        )
  
  else
    
        return(


            <>
                    <NotFound />
            </>
                
            )

}
export default MoviesDetailes