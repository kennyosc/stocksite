import React from 'react'

class LoginView extends React.Component {
    render() {
        return (
            <div>
                <b><h1 className='mb-5'>Hello Guest!</h1></b>
                <h4>Please Login</h4>
                <form>
                    <label>email:
                    <input className='ml-3' type='text' value={this.props.value} onChange={this.props.handleChange} placeholder={this.props.value} />
                    </label>
                    <br />
                    <input className='btn btn-primary' type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

// const loginView = (props, handleChange, handleSubmit) => {
//     return (
//         <div>
//             <b><h1 className='mb-5'>Hello Guest!</h1></b>
//             <h4>Please Login</h4>
//             <form>
//                 <label>email:
//                     <input className='ml-3' type='text' value={props.value} onChange={handleChange} placeholder={props.value} />
//                 </label>
//                 <br />
//                 <input className='btn btn-primary' type='submit' value='Login' />
//             </form>
//         </div>
//     )
// }

const renderList = () => {
    const list = [
        { id: 1, name: "iPhone SE 2020" },
        { id: 2, name: "Samsung galaxy s20" },
        { id: 3, name: "OnePlus 5" }
    ]
    const mapped = list.map((val, index) => {
        return (
            <p key={index}>{val.id}. {val.name}</p>
        )
    })
    return <div>{mapped}</div>
}

const logoutView = (props, logout) => {
    return (
        <div>
            <b><h1>Hello {props.name}!</h1></b>
            <h4>{renderList()}</h4>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            value: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleLogin() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleChange(event) {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({
            value: event.target.value
        })
    }

    handleLogOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        if (this.state.isLoggedIn === false) {
            return (
                <LoginView value={this.state.value} handleChange={this.handleChange} />
            )
            // return loginView(this.state.value, this.handleChange)
        } else {
            return logoutView({ name: "Kenny" }, this.handleLogOut)
        }
    }
}

export default LoginControl