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
                    <div>We are fetching workshops. Please wait</div>
                );
                break;
            case WorkshopsList.LOADED:
                el = (
                    <ul>
                    {
                        workshops.map( workshop => (
                            <li key={workshop.id}>{workshop.name}</li>
                        ))
                    }
                    </ul>
                );
                break;
            case WorkshopsList.ERROR_LOADING:
                el = (
                    <div>{error.message}</div>
                );
                break;
            default: 
                el = null;
        }

        return el;
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