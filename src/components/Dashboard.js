import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    render() {
        // if (!this.props.userAuth.auth) {
        //     return (
        //         <Redirect to='/login' />
        //     )
        // } else {
        return (
            <div className='container mt-5'>
                Dashboard Component.
                <br /> Inquiry list, inquiry details, new inquiry, edit inquiry, logout
            </div>
        )
    }
    // }
}

const mapStateToProps = (state) => {
    return {
        userAuth: state.userAuth
    }
}

export default connect(mapStateToProps)(Dashboard)
