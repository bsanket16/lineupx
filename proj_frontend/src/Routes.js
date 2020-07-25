import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './core/Home'
import CandidateSignup from './user/CandidateSignup'
import CandidateLogin from './user/CandidateLogin'
import EmployerLogin from './user/EmployerLogin'
import EmployerSignup from './user/EmployerSignup'

// import AdminRoutes from './auth/helper/AdminRoutes'
// import PrivateRoutes from './auth/helper/PrivateRoutes'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/user/signup' exact component={ CandidateSignup } /> 
                <Route path='/user/login' exact component={ CandidateLogin } />
                <Route path='/employer/signup' exact component={ EmployerSignup } /> 
                <Route path='/employer/login' exact component={ EmployerLogin } />
                {/* <PrivateRoutes path='/user/dashboard' exact component={ UserDashBoard } />
                <AdminRoutes path='/admin/dashboard' exact component={ AdminDashBoard } /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes