import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render() {
        return (
            <nav style={{ position: 'relative' }} className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/' className='navbar-brand'>STOCKSITE</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-5">
                        <li className="nav-item active">
                            {this.props.userAuth.auth ? <NavLink to='/dashboard' style={{ color: 'grey' }}>Dashboard</NavLink> : <NavLink to='/' style={{ color: 'grey' }}>Home</NavLink>}

                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAuth: state.userAuth
    }
}

export default connect(mapStateToProps)(Navbar)