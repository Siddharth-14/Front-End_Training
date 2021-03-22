import React, { Component } from 'react';
import axios from 'axios';

class WorkshopsList extends Component {
    static LOADING = 'LOADING';
    static LOADED = 'LOADED';
    static ERROR_LOADING = 'ERROR_LOADING';

    state = {
        status: WorkshopsList.LOADING,
        // workshops: null,
        // error: null
    };

    render() {
        const { status, workshops, error } = this.state;
        let el = null;

        switch( status ) {
            case WorkshopsList.LOADING:
                el = (
                    <div className="alert alert-primary">We are fetching workshops. Please wait</div>
                );
                break;
            case WorkshopsList.LOADED:
                el = (
                    <ul className="my-4">
                    {
                        workshops.map( workshop => (
                            <li key={workshop.id}>
                                {workshop.name}
                                <div dangerouslySetInnerHTML={ { __html: workshop.description } }></div>
                            </li>
                        ))
                    }
                    </ul>
                );
                break;
            case WorkshopsList.ERROR_LOADING:
                el = (
                    <div className="alert alert-danger">{error.message}</div>
                );
                break;
            default: 
                el = null;
        }

        return (
            <div className="container">{el}</div>
        );
    }

    componentDidMount() {
        axios.get( `https://workshops-server.herokuapp.com/workshops` )
            .then(response => {
                this.setState({
                    status: WorkshopsList.LOADED,
                    workshops: response.data
                });
            })
            .catch(error => {
                this.setState({
                    status: WorkshopsList.ERROR_LOADING,
                    error
                });
            });
    }
}

export default WorkshopsList;