import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentWillMount() {
        this.timerId = setInterval(() =>
            this.tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="mb-5">
                <h1>Hello {this.props.name}!</h1>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock