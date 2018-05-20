import React, { Component } from 'react';

class TableTwo extends Component {

    state = { multiplicant: 1 }
    handleClick = () => {
        this.setState((prevState) => {
            return {
                multiplicant: prevState.multiplicant + 1
            };
        })
    }
    render() {
        let multiply = this.state.multiplicant;
        return (
            /* Wrap everything in a single parent <div> . It is mandatory */
            <div>
                <h1> Table of 2 </h1>
                <h1> 2  * {multiply} <button onClick={this.handleClick}> = </button> {multiply * 2} </h1>
                <font color="red">Note : Click on = button</font>
            </div>
        )
    }
}
export default TableTwo;