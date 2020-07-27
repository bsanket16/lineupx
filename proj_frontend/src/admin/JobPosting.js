import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { API } from '../backend'
import { isAuthenticated } from '../auth/helper'

function JobPosting() {

    const [ posts, setPosts ] = useState([])

    const { _id } = isAuthenticated().user
    const { token } = isAuthenticated()

    useEffect(() => {
        axios.get(`/api/jobs/admin/${_id}`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="row d-flex">
            {posts.map(post => (
                    <div className="card col-5 m-4" key={post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text text-muted">Looking for highly qualified and hard-working employees for our organisation.</p>
                        </div>
                        <ul className="list-group list-group-flush mt-1">
                            <li className="list-group-item text-muted">Organisation  <span className="float-right text-dark">{post.companyName}</span></li>
                            <li className="list-group-item text-muted">Job Location  <span className="float-right text-dark">{post.location}</span></li>
                            <li className="list-group-item text-muted">Salary (per month)<span className="float-right text-dark">${post.salary}</span></li>
                            <li className="list-group-item text-muted">Openings <span className="float-right text-dark">{post.openings}</span></li>
                        </ul>
                        <div className="card-body">
                            <a href="/employer/dashboard" className="card-link bg-info p-2 pr-4 pl-4 mt-1 float-left shadow-sm"><i className="fa fa-pencil"></i> Update Posting</a>
                            <a href="/employer/dashboard" className="card-link bg-danger p-2 pr-4 pl-4 mt-1 float-right shadow-sm"><i className="fa fa-times"></i> Close Posting</a>
                        </div>
                    </div>  
            ))}
        </div>

    )
}

export default JobPosting
