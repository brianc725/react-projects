import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
    }

    addOne = () => {
        this.setState((state) => ({
            value: state.value + 1,
        }));
    }

    reset = () => {
        this.setState((state) => ({
            value: 0,
        }));
    }

    subtractOne = () => {
        this.setState((state) => ({
            value: state.value - 1,
        }))
    }


  render() {
    return (
        <div style={style_container}>
            <h1>{this.state.value}</h1>
            <Button outline color="success" onClick={this.addOne}>+</Button>
            <Button outline color="warning" onClick={this.reset}>reset</Button>
            <Button outline color="danger" onClick={this.subtractOne}>-</Button>
        </div>
    );
  }
}

const style_container = {
    align: 'center',
    color: 'white',
    background: 'black',
    width: '50%',
    height: '50%',
    padding: '30',
}

export default Clicker;
