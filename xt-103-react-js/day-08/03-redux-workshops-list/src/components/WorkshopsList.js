import React from 'react';
import axios from 'axios';

function WorkshopsList() {
    const [ state, setState ] = React.useState({
        status: WorkshopsList.LOADING,
        workshops: null,
        error: null
    });

    console.log( 'state = ', state );

    const { status, workshops, error } = state;
    
    React.useEffect(() => {
        axios.get( `https://workshops-server.herokuapp.com/workshops` )
            .then(response => {
                setState({
                    // spread the existing state object if you want to preserve existing state properties
                    // ...state,
                    status: WorkshopsList.LOADED,
                    workshops: response.data
                });
            })
            .catch(error => {
                setState({
                    // ...state,
                    status: WorkshopsList.ERROR_LOADING,
                    error
                });
            });
    }, [ ]);

    let el;

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

WorkshopsList.LOADING = 'LOADING';
WorkshopsList.LOADED = 'LOADED';
WorkshopsList.ERROR_LOADING = 'ERROR_LOADING';

export default WorkshopsList;