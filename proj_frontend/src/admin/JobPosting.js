import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../backend'
import { isAuthenticated } from '../auth/helper'

function JobPosting() {

    const [ posts, setPosts ] = useState([])

    const { _id } = isAuthenticated().user
    const { token } = isAuthenticated()

    useEffect(() => {
        axios.get(`${API}/jobs/admin/${_id}`, {
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
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default JobPosting
