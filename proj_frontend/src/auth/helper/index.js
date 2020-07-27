import { API } from '../../backend'

//Candidate
export const candidateSignup = user => {
    return fetch(`${API}/user/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const candidateLogin = user => {
    return fetch(`${API}/user/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//Employer
export const employerSignup = admin => {
    return fetch(`${API}/admin/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(admin)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const employerLogin = admin => {
    return fetch(`${API}/admin/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(admin)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//logout
export const logout = next => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next()

        return fetch(`${API}/logout`, {
            method: "GET"
        })
        .then(response => console.log('logout success'))
        .catch(err => console.log(err))
    } 
}

export const authenticate = (data, next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}

export const newJobPosting = job => {
    return fetch(`${API}/job-postings/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}