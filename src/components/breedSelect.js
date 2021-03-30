import React from 'react';

import { CatContext } from '../common/context/cat';

import Form from 'react-bootstrap/Form';
import { getBreed, searchByBreed } from '../core/cat';

class BreedSelect extends React.Component {
  constructor(props) {
    super(props)

    this.onSelectBreed = this.onSelectBreed.bind(this)
  }

  render() {
    let { breed } = this.context;
    return (
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Breed</Form.Label>
        <Form.Control as="select" disabled={!breed.breedList.length} value={breed.breedId} onChange={this.onSelectBreed}>
          <option>Select Breed</option>
          {breed.breedList.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </Form.Control>
      </Form.Group>
    )
  }

  onSelectBreed (e) {
    let {cat, breed, alert} = this.context;
    const breedId = e.target.value

    breed.setbreedId(breedId)
    searchByBreed(breedId, 1)
      .then(response => cat.setCat(() => response))
      .catch(() => alert.setHasError(() => true))
    
  }

  componentDidMount() {
    let {breed, alert} = this.context;
    getBreed()
      .then(response => breed.setBreed(() => response))
      .catch(() => alert.setHasError(() => true))
  }
}

BreedSelect.contextType = CatContext;

export default BreedSelect