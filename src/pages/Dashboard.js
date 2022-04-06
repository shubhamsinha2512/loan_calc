import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import LoanForm from '../components/LoanForm'
import LoanTable from '../components/LoanTable'
import Nav from '../components/Nav'

import {useSelector} from 'react-redux'

function Dashboard() {

  const user = useSelector(state => state.user)
  const loans = useSelector(state => state.loans)

  return (
    <div>
        <Nav />
        <Container className='align-left'>      

          {user && !user.isAdmin && <div className='my-4'>
              <h2>Create New Loan request</h2>
              <LoanForm />
            </div>}

          <hr />
          {user && user.isAdmin ? <h2 className='mt-4'>All Loan Requests</h2> : <h2 className='mt-4'>Your Loan Requests</h2>}
          <LoanTable loans={loans} />
        </Container>
    </div>
  )
}

export default Dashboard