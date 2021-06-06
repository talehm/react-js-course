import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {
    constructor(){
        super()
        this.state={
            test:null,
            test2:"|sdfsdf"
        }
    }
    testMe=()=>{
        this.setState({test:"Test Paragraph"})
    }
    
    componentDidMount(){
        console.log("Mounted")
    }

    componentDidUpdate(){
        console.log("Updated")
    }

    componentWillUnmount(){
        console.log("Unmounted")
    }

    render() {
        console.log(this.state.test)
        const {test,test2} = this.state
        return (
        <div>
            <h1 onClick={this.testMe}> Hello React </h1>
            <h2>{test}</h2>
            <h2>{test2}</h2>
        </div>
    )
    }
}
