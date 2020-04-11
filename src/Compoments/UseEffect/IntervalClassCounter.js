import React from 'react'

const fake = ''
class IntervalClassCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.fake = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.fake)
    }

    tick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        console.log(this.fake)
        return <h1>{this.state.count}</h1>
    }
}

export default IntervalClassCounter