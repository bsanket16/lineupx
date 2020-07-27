import React, { useState } from 'react'
import Menu from '../core/Menu'
import { candidateSignup } from '../auth/helper'
import { Link } from 'react-router-dom'

const CandidateSignup = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const { username, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error: false})
        candidateSignup({username, email, password})
        .then((data) => {
            if(data.error){
                setValues({...values, error:data.error, success: false})
            }
            else{
                setValues({...values,
                username: '',
                email: '',
                password: '',
                error: '',
                success: true
                })
            }
        })
        .catch(console.log('Error in Signing Up'))
    }

    const successMsg = () => {
        return (
            <>
                <div className="container alert alert-success" style={{display: success ? "" : "none"}}>
                    New Account Created
                </div>
            </>
        )
    }

    const errorMsg = () => {
        return (
                <div className="container alert alert-danger" style={{display: error ? "" : "none"}}>
                    { error }
                </div>
        )
    }

    const signUpForm = () => {
        return (
            <>
                <Menu />

                <div className="container">

                    <div className="card mt-5 shadow-lg">
                        <div className="card-body m-0 p-0">
                        <div className="row no-gutters">
                        
                        <div className="col-3 my-auto mr-auto order-last">
                            <form className="form-signup">
                            <h1 className='display-4 mt-3 mb-5 text-dark text-center'>User Signup</h1>

                            <div className="form-label-group shadow-sm rounded">
                                    <input type="name" id="inputName" className="form-control" placeholder='Name' 
                                    required autoFocus onChange={handleChange("username")} autoComplete="new-name" value= { username } />
                                    <label htmlFor="inputName">Username</label>
                                </div>

                                <div className="form-label-group shadow-sm rounded">
                                    <input type="email" id="inputEmail" className="form-control" placeholder='Email' 
                                    required onChange={handleChange("email")}  autoComplete="off" value= { email } />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group shadow-sm rounded">
                                    <input type="password" id="inputPassword" className="form-control" placeholder='Password' 
                                    required onChange={handleChange("password")}  autoComplete="new-password" value={ password } />
                                    <label htmlFor="inputPassword">New password</label>
                                </div>
                                
                                <button onClick={ onSubmit } href='/' className="btn btn-lg btn-warning btn-block mt-4 mb-3 shadow-sm rounded" type='submit'> Sign up </button>
                                
                                {errorMsg()}
                                {successMsg()}    

                            </form>
                        </div>

                        <div className="col-8 my-0 p-0 mr-auto ">
                            <div className="not-signed-ups rounded">
                            <div className="mt-4">
                                <p className="sign-side-text display-4 text-white text-center mb-2">Already Signed Up?</p>
                                <p className="sign-side-text-2 text-white text-center mb-4">Go to Dashboard, You might have new job offers.</p>
                                <Link to='/user/login'><button type="button" className="btn btn-outline-light m-auto"> Log In </button></Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            {signUpForm()}
        </>
    )
}

export default CandidateSignup