import React from 'react';
import axios from 'axios'
import cookies from 'universal-cookie'
import { keepLogin } from '../src/redux/actions/authAction'
import { BrowserRouter, Route } from 'react-router-dom'
import "antd/dist/antd.css";
import history from './history'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux';

const cookie = new cookies()

class App extends React.Component {

  componentWillMount() {
    // if (!sessionStorage.getItem('auth')) {
    //   return ''
    // } else {
    //   axios.get('http://localhost:3000/auth/session').then(val => {
    //     console.log(val.data)
    //     if (!val.data.auth) {
    //       sessionStorage.removeItem('auth')
    //       sessionStorage.removeItem('user')
    //     } else {
    //       sessionStorage.setItem('auth', val.data.auth)
    //       sessionStorage.setItem('user', val.data.user)
    //     }
    //   })
    // }

    const userCookie = cookie.get('user')
    console.log(userCookie)
    if (userCookie !== undefined) {
      this.props.dispatch(keepLogin(userCookie))
    }
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />

      </BrowserRouter>
    )
  }
}


export default connect(null)(App);
// export default App;
