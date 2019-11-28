import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class CardSingle extends Component {
  render() {
    return (
        <div>
            <Card style={{'min-height': '100vh' }}>
                <CardImg top width="100%" src={this.props.Poster} alt="Movie poster image" />
                <CardBody>
                    <CardTitle>{this.props.Title}</CardTitle>
                    <CardSubtitle>{this.props.Year} | {this.props.Rated}</CardSubtitle>
                    <CardText>{this.props.Plot}</CardText>
                    <CardText>IMDb Rating: {this.props.imdbRating}</CardText>
                </CardBody>
            </Card>
        </div>
    );
  }
}

export default CardSingle;