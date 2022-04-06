import React, {useState, useEffect} from 'react'
import {Form, Button, Container, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

//firebase
import {auth, db} from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'

function Signup() {

    const [details, setDetails] = useState({
        email:null,
        password: null,
        isAdmin : false
    })

    const [error, setError] = useState(null)

    async function createNewUser(details){
        createUserWithEmailAndPassword(auth, details.email, details.password)
        .then(async userCred => {
            // console.log(userCred.user)
            let newUser = await setDoc(doc(db, "users", userCred.user.uid), {
               ...details,
               uid: userCred.user.uid
           })

           console.log(newUser)
        })
        .catch(err =>{
            setError(err)
            console.log(err)
        })
    }

    function handleChange(e){
        let val = e.target.value;

        if(e.target.name == "isAdmin") val = e.target.checked

        setDetails(details => {
            return {
                ...details,
                [e.target.name] : val
            }
        })
        // console.log(details)
    }

    function onSubmit(e){
        e.preventDefault()

        try{
            createNewUser(details)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        // onSubmit()
    }, [])

  return (
      <>
      <Nav />
      <Card className='my-4'>
          <h1>Signup</h1>
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
                    
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Admin Account" name="isAdmin" value={details.isAdmin} onChange={handleChange}  />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
          </Card.Body>
          <Link to="/login">Already have an account?</Link>
      </Card>
      </>
  )
}

export default Signup