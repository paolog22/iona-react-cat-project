import React from 'react';
import { Link } from 'react-router-dom'

// bootstrap component
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class CatCard extends React.Component {
    render() {
      return <Card>
      <Card.Img variant="top" src={this.props.cat.url} />
      <Card.Body>
        <Link to={`/${this.props.cat.id}`}>
          <Button variant="primary" block={true}>View details</Button>
        </Link>
      </Card.Body>
    </Card>;
    }
  }

export default CatCard;