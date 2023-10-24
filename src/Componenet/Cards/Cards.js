import { Col, Row } from 'react-bootstrap'

import NotFound from '../NotFound/NotFound'
import CardItem from '../CardItem/CardItem'

import { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../../Redux/Action'
import Pagination from '../Pagination/Pagination'

const Cards = () => {
    const [movies , setMovies] = useState([])
    const dispatch = useDispatch()
    const mov = useSelector(state => state.movies)

    useEffect( () => {dispatch(getAllMovies())} ,[])

    useEffect( () => {setMovies(mov)} ,[mov])


    return (
       <Row  sm={12} md={12} lg={12}  className='my-5 justify-content-center d-flex'>   
            {
                movies.length >=1 ? (
                    movies.map( (item) => {
                        return(         
                                <Col sm={10} md={6} lg={3}>
                                        <CardItem
                                        key={item.id} 

                                        poster={item.poster_path}
                                        name={item.original_title} 
                                        date={item.release_date}
                                        voteCount={item.vote_count}
                                        voteAverage={item.vote_average}
                                        id={item.id}

                                            />
                                </Col>  
                            )
                            } )
                ) : <NotFound />
                        }  

          {
          movies.length >=1 ? (
                    <Pagination />

          ):null

        }    
       </Row>
    )
}

export default Cards