import React from 'react';
import './timer.css'

interface TimerProps {
    currentNumber: number,
    numberClass: string
}

function Timer(props: TimerProps) {
    return React.createElement('div', {
        className: 'timer'
    }, 
    React.createElement('span', {
        className: props.numberClass
    }, props.currentNumber))
}

const defaultProps: TimerProps = {
    currentNumber: 0,
    numberClass: 'number'
}

Timer.defaultProps = defaultProps;

export class TimerComponent extends React.Component {
    interval: any
    state = {
        currentNumber: 0,
        stop: false
    }
    startCount = () => {
        let that = this;
        that.interval = setInterval(function() {
        if (that.state.stop === false) {
            that.setState({
            currentNumber: that.state.currentNumber + 1
            })
        }
        }, 1000)
    }

    stopCount = () => {
        this.setState({
        stop: true
        })
    }

    resetCount = () => {
        clearInterval(this.interval);
        this.setState({
        currentNumber: 0,
        stop: false
        })
    }
    render() {
      return (
        <React.Fragment>
            <button onClick={this.startCount}>Start</button>
            <button onClick={this.stopCount}>Stop</button>
            <button onClick={this.resetCount}>Reset</button>
            <Timer currentNumber={this.state.currentNumber}/>
        </React.Fragment>
      );
    };
}

