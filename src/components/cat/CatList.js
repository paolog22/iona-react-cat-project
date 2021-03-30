import React from 'react';

// boostrap component
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CatCard from './CatCard'

import { CatContext } from '../../common/context/cat';

class CatList extends React.Component {
    render() {
      let { cat } = this.context;
      return <Row>
        {!cat.catList.length && <Col sm={6} md={3}>
          No cat available
        </Col>}

        {cat.catList.map(cat => <Col key={cat.id} sm={6} md={3}>
         <CatCard cat={cat}/>
        </Col>)}
    </Row>
    }
}


CatList.contextType = CatContext;

export default CatList;