import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import {useSelector} from 'react-redux'

import {useDispatch} from 'react-redux'
import {deleteUser} from '../redux/actions'

function Nav() {

  const user = useSelector(state => state.user)
  // console.log(user)
  const dispatch = useDispatch()

  function logout(e){
    e.preventDefault()
    dispatch(deleteUser())
  }

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand href="/"><h2>Loan Calculator</h2></Navbar.Brand>
            {user && <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="#login">{user.email || "NA"}</a>
                </Navbar.Text>
                
                <Button 
                  className="mx-2" 
                  size="sm" 
                  variant="danger" 
                  onClick={logout}>
                    Logout
                  </Button>

              </Navbar.Collapse>
            }
        </Container>
    </Navbar>
  )
}

export default Nav