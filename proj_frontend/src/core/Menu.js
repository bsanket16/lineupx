import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../auth/helper/index'


const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return { color : '#ffc107 ' }
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

                <ul className="nav bg-dark">
                    
                            <li className="nav-item">
                                <Link style={currentTab(history, '/')} className='nav-link' to='/'>
                                    Home
                                </Link>
                            </li>

                    {!isAuthenticated() && (
                        <>

                            <li className="nav-item">
                                <Link style={currentTab(history, '/user/login')}  className='nav-link' to='/user/login'>
                                    Job Search
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link style={currentTab(history, '/employer/login')}  className='nav-link' to='/employer/login'>
                                    Employer
                                </Link>
                            </li>    
                        </>
                    )} 

                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link style={currentTab(history, '/user/dashboard')}  className='nav-link' to='/user/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link style={currentTab(history, '/employer/dashboard')}  className='nav-link' to='/employer/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                    )}

                    {isAuthenticated() && (
                        <li className="nav-item">
                            <span className='nav-link' onClick={() => {
                                logout(() => {
                                    history.push('/')
                                })
                            }}> 
                                Logout
                            </span>
                        </li>
                    )}

                </ul> 

            </div>
        </nav>

    </>
)

export default withRouter(Menu)
