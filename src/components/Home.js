import React from 'react'
import { connect } from 'react-redux'
import homeImage from '../images/homeImage.jpg'
import './Home.css'
import { NavLink, Redirect } from 'react-router-dom'


class Home extends React.Component {
    handleRegisterButton = () => {
        if (this.props.userAuth.auth) {
            return (
                <div>
                    <NavLink to='/dashboard' className='btn btn-success'>Dashboard</NavLink>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Curious to find out more? Please register or <a style={{ color: '#1890ff' }} href='/login'>login here</a> if you already have an account</p>
                    <NavLink to='/register' className='btn btn-primary'>Register</NavLink>
                </div>
            )
        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${homeImage})` }} className='mt-0 home-background'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg'>
                            <div className="jumbotron custom-jumbotron">
                                <div>
                                    {this.props.userAuth.auth ? <h1 className="display-5">Hello {this.props.userAuth.name}!</h1> : <h1 className="display-5">Welcome!</h1>}
                                    <p className="lead" >Welcome to our note and analyzing site for stocks. It is free and easy to use! Save, document and analyze your stock of choices. Feel free to contact us at cs@stocksite.com for any inquiries your have</p>
                                </div>
                                <div>
                                    {this.handleRegisterButton()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userAuth: state.userAuth
    }
}

export default connect(mapStateToProps)(Home)