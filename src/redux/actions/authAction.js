import axios from 'axios'

export const Login = (data) => {
    return ({
        type: 'LOGIN',
        payload: axios.post('http://localhost:3000/auth/login', data, {})
    })
}