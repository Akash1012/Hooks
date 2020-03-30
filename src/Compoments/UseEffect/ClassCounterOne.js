import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title ....', prevState)
            document.title = `Clicked ${this.state.count} times`
        }
    }

    increment = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <input type='text' value={this.state.name} name='name' onChange={this.handleName} />
                <button onClick={this.increment}>
                    Click {this.state.count}
                </button>
            </div>
        )
    }
}

export default ClassCounterOne