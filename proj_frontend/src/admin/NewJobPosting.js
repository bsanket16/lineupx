import React, { useState } from 'react'
import Menu from '../core/Menu'
import { Link } from 'react-router-dom'
import { newJobPosting, isAuthenticated } from '../auth/helper'

const NewJobPosting = () => {

    const [values, setValues] = useState({
        title: '',
        companyName: `${isAuthenticated().user.organisation}`,
        location: '',
        salary: '',
        openings: '',
        error: '',
        success: false
    })

    const { title, companyName, location, salary, openings, error, success } = values

    const handleChange = name => event => {
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error: false})
        newJobPosting({title, companyName, location, salary, openings})
        .then((data) => {
            if(data.error){
                setValues({...values, error:data.error, success: false})
            }
            else{
                setValues({...values,
                title: '',
                companyName: '',
                location: '',
                salary: '',
                openings: '',
                error: '',
                success: true
                })
            }
        })
        .catch(console.log('Error in posting a job'))
    }

    const successMsg = () => {
        return (
            <>
                <div className="container alert alert-success" style={{display: success ? "" : "none"}}>
                    New Job Posting Created
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

    const newJob = () => {
        return (
            <>

                <div className="container">

                    <div className="card mt-5 shadow-lg">
                        <div className="card-body m-0 p-0">
                        <div className="row no-gutters">
                        
                        <div className="col-12 my-auto mr-auto order-last">
                            <form className="form-signup p-5">

                            <div className="form-label-group shadow-sm rounded">
                                    <input type="text" id="title" className="form-control" placeholder='Job Title' 
                                    required autoFocus onChange={handleChange("title")} autoComplete="off" value= { title } />
                                    <label htmlFor="inputName">Job Title</label>
                                </div>

                                <div className="form-label-group shadow-sm rounded">
                                    <input type="text" id="companyName" className="form-control" placeholder='Organisation' 
                                    required onChange={handleChange("companyName")}  autoComplete="off" value= { companyName } />
                                    <label htmlFor="inputEmail">Organisation Name</label>
                                </div>

                                <div className="form-label-group shadow-sm rounded">
                                    <input type="text" id="location" className="form-control" placeholder='Job Location' 
                                    required  onChange={handleChange("location")} autoComplete="new-name" value= { location } />
                                    <label htmlFor="inputName">Job Location</label>
                                </div>

                                <div className="form-label-group shadow-sm rounded">
                                    <input type="number" id="salary" className="form-control" placeholder='Salary (per month)' 
                                    required  onChange={handleChange("salary")} autoComplete="new-name" value= { salary } />
                                    <label htmlFor="inputName">Salary</label>
                                </div>

                                <div className="form-label-group shadow-sm rounded">
                                    <input type="number" id="openings" className="form-control" placeholder='Number of openings' 
                                    required  onChange={handleChange("openings")} autoComplete="new-name" value= { openings } />
                                    <label htmlFor="inputName">Openings</label>
                                </div>
                                
                                <button onClick={ onSubmit } href='/employer/dashboard' className="btn btn-lg btn-warning btn-block mt-4 mb-3 shadow-sm rounded" type='submit'> Create a new job posting </button>
                                
                                {errorMsg()}
                                {successMsg()}    

                            </form>
                        </div>

                    </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <Menu />

            <div className="dashboard container-fluid">
                <div className="row">

                    <nav id="sidebarMenu" className="col-2 d-md-block bg-dark sidebar shadow">
                        <div className="sidebar-sticky pt-4">
                            <ul className="nav flex-column text-dark">
                                <li className="nav-item mb-5 shadow-sm">
                                    <a className="nav-link active text-warning dash-headingi" href="/#/employer/dashboard">
                                    <span data-feather="home"></span>
                                    Employer Dashboard <span className="sr-only">(current)</span>
                                    </a>
                                </li>

                                <li className="nav-item ml-3">
                                    <a className="nav-link text-light dash-heading" href="/#/employer/dashboard">
                                    <span data-feather="file"></span>
                                    Update Profile
                                    </a>
                                </li>

                                <li className="nav-item ml-3">
                                    <a className="nav-link text-light dash-heading" href="/#/employer/dashboard">
                                    <span data-feather="file"></span>
                                        <Link className="text-info" to='/employer/dashboard'>
                                            New Job Posting
                                        </Link>
                                    </a>
                                </li>
                                
                                <li className="nav-item ml-3">
                                    <a className="nav-link text-light dash-heading" href="/#/employer/dashboard">
                                    <span data-feather="file"></span>
                                    Delete Account
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4">
                        
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1 mb-3 border-bottom">
                            <h2 className="ml-3">New Job Postings</h2>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button>
                            </div>
                        </div>
                            
                        <div className="col-10 m-auto">
                            {newJob()}
                        </div>                            

                    </main>
                </div>
            </div>



        </div>
    )
}

export default NewJobPosting
