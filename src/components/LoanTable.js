import React from 'react'
import {Table, Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'

function LoanTable({loans}) {

    const user = useSelector(state => state.user)

  return (
      <>
        {user && <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Loan ID</th>
                <th>Email</th>
                <th>Loan Amount</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>EMI</th>
                <th>Type</th>
                {user.isAdmin ? <th rowSpan="2" >Action</th> : <th>Status</th>}
                </tr>
            </thead>

            {loans && <tbody>
            {loans.map((loan, i) => 
            <tr key={loan.loanId}>
                <td>{i+1}</td>
                <td>{loan.loanId}</td>
                <td>{loan.email}</td>
                <td>{loan.amount}</td>
                <td>{loan.startDate}</td>
                <td>{loan.endDate}</td>
                <td>{loan.emi}</td>
                <td>{loan.type}</td>
                {user.isAdmin && <td><Button className="mx-1" size="sm" variant="success">Approve</Button>
                                    <Button className="mx-1" size="sm" variant="danger">Approve</Button></td>}
                {!user.isAdmin && <td>{loan.rejected ? "Rejected" : loan.approved ? "Approved" : "Pending"}</td>}
            </tr>
            )}
            </tbody>}
        </Table>}
    </>
  )
}

export default LoanTable