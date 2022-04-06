import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import LoanForm from '../components/LoanForm'
import LoanTable from '../components/LoanTable'
import Nav from '../components/Nav'

function Dashboard() {
  return (
    <div>
        <Nav />
        <Container>      

          <LoanForm />
          <hr />
          <LoanTable />
        </Container>
    </div>
  )
}

export default Dashboard