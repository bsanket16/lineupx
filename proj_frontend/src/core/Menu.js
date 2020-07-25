import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return { color : 'pink' }
    }
    else{
        return { color : '#ffffff' }
    }
}

const Menu = ({ history }) => (
    <>
        <nav className="navbar navbar-dark fixed-top bg-dark text-white shadow-sm">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <Link to='/' className='text-white'>
                        LineupX
                    </Link>
                </span>

                <ul className="nav">
                    
                    <li className="nav-item">
                        <Link style={currentTab(history, '/')} className='nav-link' to='/'>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link style={currentTab(history, '/user/login')}  className='nav-link' to='/user/login'>
                            Job Search    
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className='nav-link' to='#'>
                            Contact    
                        </Link>
                    </li>

                    <li style={currentTab(history, '/')} className="nav-item">
                        <Link style={currentTab(history, '/employer/login')}  className='nav-link' to='/employer/login'>
                            Employer    
                        </Link>
                    </li>   

                    {/* {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link style={currentTab(history, '/user/dashboard')}  className='nav-link' to='/user/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link style={currentTab(history, '/admin/dashboard')}  className='nav-link' to='/admin/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                    )} */}


{/* 
                    <li className="btn btn-light btn-sm">
                        <Link className='nav-link' to='/'>
                            Post Jobs
                        </Link>
                    </li> */}

                    
                    {/* <li className="nav-item">
                        <Link style={currentTab(history, '/admin/dashboard')}  className='nav-link' to='/admin/dashboard'>
                            A. Dashboard
                        </Link>
                    </li> */}

                    {/* Signup & Login Routes */}

                    {/* {!isAuthenticated() && (
                        <>
                            <li className="nav-item">
                                <Link style={currentTab(history, '/signup')}  className='nav-link' to='/signup'>
                                    Signup
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link style={currentTab(history, '/login')}  className='nav-link' to='/login'>
                                    Login
                                </Link>
                            </li>    
                        </>
                    )}  */}

                    {/* {isAuthenticated() && (
                        <li className="nav-item">
                            <span className='nav-link' onClick={() => {
                                logout(() => {
                                    history.push('/')
                                })
                            }}> 
                                Logout
                            </span>
                        </li>
                    )} */}

                </ul> 

            </div>
        </nav>

    </>
)

export default withRouter(Menu)
