import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import Nav from '../components/Nav'

import {Link} from 'react-router-dom'

import { useDispatch } from 'react-redux'
import {setUser} from '../redux/actions'

import {auth, db} from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

function Login() {

    const dispatch = useDispatch()

    const [details, setDetails] = useState({
        email:null,
        password: null,
    })

    function handleChange(e){
        let val = e.target.value;


        setDetails(details => {
            return {
                ...details,
                [e.target.name] : val
            }
        })
        // console.log(details)
    }

    async function onSubmit(e){
        e.preventDefault()

        signInWithEmailAndPassword(auth, details.email, details.password)
        .then(userCred => {
            getDoc(doc(db, "users", userCred.user.uid))
            .then(userDetails => {

                let user = userDetails.data()

                dispatch(setUser({
                    email: user.email,
                    isAdmin : user.isAdmin
                }))
            })
        })
    }

  return (
      <>
      <Nav />
      <Card className='my-4'>
          <h1>Login</h1>
          <Card.Body className='d-flex align-items-center justify-content-center'>
            <div>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={details.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={details.password} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
          </Card.Body>
          <Link to="/signup">Don't have an account?</Link>
      </Card>
      </>

  )
}

export default Login