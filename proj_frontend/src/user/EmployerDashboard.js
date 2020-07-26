import React, { useState } from 'react'
import Menu from '../core/Menu'
import { Link } from 'react-router-dom'
import JobPosting from '../admin/JobPosting'


const EmployerDashboard = () => {
    return (
        <>
            <Menu />

            <div className="dashboard container-fluid">
                <div className="row">

                    <nav id="sidebarMenu" className="col-2 d-md-block bg-dark sidebar shadow">
                        <div className="sidebar-sticky pt-4">
                            <ul className="nav flex-column text-dark">
                                <li className="nav-item mb-5 shadow-lg">
                                    <a className="nav-link active text-warning dash-headingi" href="#">
                                    <span data-feather="home"></span>
                                    Employer D.  <span class="sr-only">(current)</span>
                                    </a>
                                </li>

                                <li className="nav-item ml-3">
                                    <a className="nav-link text-light dash-heading" href="#">
                                    <span data-feather="file"></span>
                                    Update Profile
                                    </a>
                                </li>

                                <li className="nav-item ml-3">
                                    <a className="nav-link text-light dash-heading" href="#">
                                    <span data-feather="file"></span>
                                        <Link to='/employer/create/job-posting'>
                                            New Job Posting
                                        </Link>
                                    </a>
                                </li>
                                
                                <li className="nav-item ml-3">
                                    <a className="nav-link text-light dash-heading" href="#">
                                    <span data-feather="file"></span>
                                    Delete Account
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4">
                        
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1 mb-3 border-bottom">
                            <h2 className="ml-3">Job Postings</h2>
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
                            
                        <JobPosting />

                    </main>
                    
                </div>
            </div>
        </>
    )
}

export default EmployerDashboard
