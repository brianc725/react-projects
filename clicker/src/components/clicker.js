import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './clicker.css';

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
        <div class="container">
            <h1>{this.state.value}</h1>
            <div>
                <Button outline color="success" onClick={this.addOne}>+</Button>
                <Button outline color="warning" onClick={this.reset}>reset</Button>
                <Button outline color="danger" onClick={this.subtractOne}>-</Button>
            </div>
        </div>
    );
  }
}

export default Clicker;
