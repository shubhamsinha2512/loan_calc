import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function Nav() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand href="/"><h2>Loan Calculator</h2></Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Nav