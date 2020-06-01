import axios from 'axios'


export const Login = (data) => {
    return ({
        type: 'LOGIN',
        payload: axios.post('http://localhost:3000/auth/login', data, {})
    })
}

export const keepLogin = (cookie) => {
    return {
        type: 'LOGIN_FULFILLED',
        payload: {
            data: {
                user: {
                    _id: cookie._id,
                    name: cookie.name,
                    email: cookie.email,
                    verification: cookie.verification,
                },
                auth: cookie.auth
            }
        }
    }
}