import React, { Component } from 'react';

/* Class Component / Stateful Component */
class Operands extends Component {
    render() {
        return (
            <button onClick={() => this.props.handleClick(this.props.operand)}>{this.props.operand} Rupee Coin </button>
        )
    }
}

/* Function Component / Stateless Component */
const Result = (props) => {
    return (
        <div>
            <font color="blue"> Total Money = {props.resultValue} Rupees</font>
        </div>
    )
}

/* Parent Component for Operands and Result */
class MoneyCalculator extends Component {
    state = {
        resultValue: 0
    };
    calculateValue = (operand) => {
        this.setState((prevState) => ({
            resultValue: prevState.resultValue + operand
        }))
    }
    render() {
        return (
            /* CSS property is passed in <div> tag */
            <div style={{margin:'auto', textAlign:'center'}}>
                <h1>Coins Sum</h1>
                <Operands operand={1} handleClick={this.calculateValue} />
                <span> </span>
                <Operands operand={2} handleClick={this.calculateValue} />
                <span> </span>
                <Operands operand={5} handleClick={this.calculateValue} />
                <br /><br />
                <Result resultValue={this.state.resultValue} />
            </div>
        )
    }
}
export default MoneyCalculator;