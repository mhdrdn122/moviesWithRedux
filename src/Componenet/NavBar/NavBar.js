import { useEffect, useState } from "react"
import { getAllMovies, getSertchMovies } from "../../Redux/Action"
import { useDispatch } from "react-redux"
import { Button, Container, Form,  Navbar } from "react-bootstrap"

const NavBar = ({disabledInput}) => {
  
  const  [word ,setWord] = useState("")
  const dispatch = useDispatch()


  useEffect(() => {
    if(word == "")
    dispatch(getAllMovies())

    else
       dispatch(getSertchMovies(word))

     },[word])

  

    return (
        <Navbar bg="dark"  variant="dark"  expand="sm">
        <Container >
          <Navbar.Brand href="/">Movies Api</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            

            <Form className="d-flex justify-content-end w-100">
              <Form.Control
                type="search"
                placeholder="البحث..."
                className="me-5 w-50"
                aria-label="Search"
                onChange={ (e) => { setWord(e.target.value) }}
                //onFocus={(e) => { e.target.disabled=disabledInput()}}
              />
              <Button variant="outline-success" className="mx-2">البحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar