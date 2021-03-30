import React from 'react';
import {Link} from 'react-router-dom'

// bootstrap components
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// api
import { getCatByBreed } from '../core/cat';

class Detail extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cat: {
        breeds: []
      },
    }
  }

  render() {
    return <Container>
      <Card>
      <Card.Header>
        <Link to={`/?breed=${this.state.cat.breeds[0]?.id}`}>
          <Button variant="primary">Back</Button>
        </Link>
      </Card.Header>
      <Card.Img variant="top" src={this.state.cat.url} />
      <Card.Body>
        <Card.Title>{this.state.cat.breeds[0]?.name}</Card.Title>
        <h5>Origin: {this.state.cat.breeds[0]?.origin}</h5>
        <h6>{this.state.cat.breeds[0]?.temperament}</h6>
        <Card.Text>
          {this.state.cat.breeds[0]?.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>;
  }

  componentDidMount() {
    const { breed_id } = this.props.match.params;
    getCatByBreed(breed_id).then(response => this.setState({
     cat: response
    }))
  }
}

export default Detail;