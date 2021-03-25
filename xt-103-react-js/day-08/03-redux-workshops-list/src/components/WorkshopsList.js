import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
    workshopsLoading,
    workshopsLoaded,
    workshopsErrorLoading,
    WORKSHOPS_LIST_LOADING,
    WORKSHOPS_LIST_LOADED,
    WORKSHOPS_LIST_ERROR_LOADING
} from '../actions';

import { getWorkshops } from '../reducers/workshops';

function WorkshopsList() {
    const dispatch = useDispatch();
    const { status, workshops, error } = useSelector( getWorkshops );

    React.useEffect(() => {
        dispatch( workshopsLoading() );

        axios.get( `https://workshops-server.herokuapp.com/workshops` )
            .then(response => {
                dispatch( workshopsLoaded( response.data ) );
            })
            .catch(error => {
                dispatch( workshopsErrorLoading( error ) );
            });
    }, [ ]);

    let el;

    switch( status ) {
        case WORKSHOPS_LIST_LOADING:
            el = (
                <div>We are fetching workshops. Please wait</div>
            );
            break;
        case WORKSHOPS_LIST_LOADED:
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
        case WORKSHOPS_LIST_ERROR_LOADING:
            el = (
                <div>{error.message}</div>
            );
            break;
        default: 
            el = null;
    }

    return el;
}

export default WorkshopsList;