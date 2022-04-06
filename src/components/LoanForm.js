import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

function LoanForm() {

    const [details, setDetails] = useState({
        name:"",
        address:"",
        email:"",
        amount:0,
        duration: 1,
        // startDate: new Date(),
        // endDate: new Date(),
        emi:0,
        type:"fixed"
    })

    function handleChange(e){
        let val = e.target.value

        setDetails(details => {
            return {
                ...details,
                [e.target.name] : val
            }
        })
        
        if(e.target.name == 'duration' || e.target.name == 'amount'){
            let emiAmt = details.amount / details.duration

            setDetails(details => {
                return {
                    ...details,
                    emi : emiAmt
                }
            })
        }
    }

  return (
        <Form className="mx-2 my-4">
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Applicant's Name</Form.Label>
                        <Form.Control type="text" placeholder="Applicant's Name" name="name" value={details.name} onChange={handleChange} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Password" name="address" value={details.address} onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={details.email} onChange={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            

            {/* <Row>

    

            </Row> */}

            {/* Skipping date-pickerdue to version conflict issue with react 18 & react-datepicker, taking duration instead*/}
            {/* <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Loan Start Date</Form.Label>
                        <Form.Control type="date" placeholder="Loan start date" name="startDate" value={details.startDate} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Loan Expiry Date</Form.Label>
                        <Form.Control type="date" placeholder="Loan end date" name="endDate" value={details.endDate} />
                    </Form.Group>
                </Col>
            </Row> */}


            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Loan Amount</Form.Label>
                        <Form.Control type="number" placeholder="Loan Amount" name="amount" value={details.amount} onChange={handleChange}/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Loan Duration (In months)</Form.Label>
                        <Form.Control type="number" placeholder="Loan Duration" name="duration" value={details.duration} onChange={handleChange} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Monthly Installment (EMI)</Form.Label>
                        <Form.Control type="text" placeholder="Monthly Installment" name="name" value={details.emi} disabled onChange={handleChange}/>
                    </Form.Group>
                </Col>

            </Row>
            
            <Form.Group className="mb-3">
                <Form.Label>Fixed/Floating</Form.Label>
                <Form.Check type="checkbox" name="type" />
            </Form.Group>


        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  )
}

export default LoanForm