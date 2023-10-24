import { Card, Col } from "react-bootstrap"
import './CardItem.css'
import { Link } from "react-router-dom"
const CardItem = ({name,date,voteCount,voteAverage,poster,id}) => {

    return (
            
            <Link  to={`/movies/${id}`}>

                           <Card style={{ width: '19rem' ,  height: '17rem'}} className='cardItem my-2 w-100'>
                                    <Card.Img variant="top" className="w-100 card h-100" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="imag"/>
                                


                                    <Card.Body className="cardBody">
                                        
                                        <Card.Text>  
                                                                <div className=' p-4  text-center' >
                                                                    <p>اسم الفلم : {name} </p>
                                                                    <p>تاريخ الاصدار : {date}</p>
                                                                    <p> عدد المقيمين : {voteCount}  </p>
                                                                    <p>التقييم : {voteAverage}</p>

                                                                </div>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
            
            </Link>
       
    )
}

export default CardItem