import React from 'react';

// bootstrap component
import Alert from 'react-bootstrap/Alert'

// context
import { CatContext } from '../common/context/cat';


class ErrorNotification extends React.Component {
    render() {
        let {alert} = this.context;
        return <Alert variant="warning" show={alert.hasError} dismissible onClose={() => alert.setHasError(false)}>
            <p>
            Apologies but we could not load new cats for you at this time! Miau!
            </p>
        </Alert>;
    }
}

ErrorNotification.contextType = CatContext;

export default ErrorNotification;