import React from 'react'
import { connect } from 'react-redux'
import { Login } from '../redux/actions/authAction'
import { Form } from 'antd'
import InputForm from './single/formItem'
import loginImage from '../images/loginImage.jpg'
import './Login.css'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        this.setState({
            [property]: value
        })
    }

    handleLogin = async (event) => {
        event.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.dispatch(Login(data)).then(val => {
            sessionStorage.setItem('auth', val.value.data.auth)
            sessionStorage.setItem('user', val.value.data.user)
        })
    }

    render() {
        if (this.props.userAuth.auth) {
            return (
                <Redirect to='/dashboard' />
            )
        } else {
            return (
                <div className='login-background' >
                    <div className='container p-5 d-flex justify-content-center' >
                        <div className='row'>
                            <div className="card" style={{ width: '59em' }}>
                                <div className="card-body p-5" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '59em' }}>
                                    <h1 style={{ color: '#1890ff' }}>Login</h1>
                                    <form>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input onChange={this.handleChange} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input onChange={this.handleChange} type="password" name='password' className="form-control" id="exampleInputPassword1" />
                                            <small id="emailHelp" className="form-text text-muted">Forgot password?</small>

                                        </div>
                                        <button onClick={this.handleLogin} type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        userAuth: state.userAuth
    }
}

export default connect(mapStateToProps)(Home)