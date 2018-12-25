import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Clicker extends Component {
  render() {
    return (
        <div style={style_container}>
            <h1>Clicker</h1>
            <Button color="success">+</Button>
            <Button color="warning">reset</Button>
            <Button color="danger">-</Button>
        </div>
    );
  }
}

const style_container = {
    align: 'center',
    color: 'red',
}

export default Clicker;
