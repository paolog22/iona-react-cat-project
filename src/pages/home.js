import React from 'react';

// bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'

// custom components
import CatList from '../components/cat/CatList'
import BreedSelect from '../components/breedSelect'
import ErrorNotification from '../components/errorNotification'

// context
import { CatContext } from '../common/context/cat';

//api
import { searchByBreed } from '../core/cat';

class Home extends React.Component {
  render() {
    let {breed} = this.context;

    return <Container>
      
        <h1>Cat Browser</h1>
        <Row style={{ padding: '10px 0px' }}>
          <Col sm={6} md={3}>
            <BreedSelect/>
          </Col>
        </Row>

        <Row>
          <Col>
            <ErrorNotification />
          </Col>
        </Row>

        <CatList />

        <Row>
          <Col>
            <Button disabled ={!breed.breedList.length} variant="success">Load more</Button>
          </Col>
        </Row>
      
    </Container>;
  }

  componentDidMount() {
    const { breed, cat, alert } = this.context;
    const query = new URLSearchParams(this.props.location.search);
    const breedId = query.get('breed');
    breed.setbreedId(() => breedId)
    searchByBreed(breedId, 1)
      .then(response => cat.setCat(() => response))
      .catch(() => alert.setHasError(() => true))
  }
}

Home.contextType = CatContext;

export default Home;