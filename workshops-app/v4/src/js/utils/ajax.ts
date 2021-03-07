import AppConfig from '../config.js';
import { getToken } from '../services/auth.js';

export type AjaxRequestOptions<T> = {
    method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT',
    endpoint: string,
    body?: T,
    authenticated?: boolean
}

function makeAjaxRequest<T>( { method, endpoint, body, authenticated } : AjaxRequestOptions<T> ) {
    // const { method, endpoint, body, authenticated } = options;
    const headers = new Headers();
    
    const requestOptions : RequestInit = {
        method: method,
        headers: headers,
        redirect: 'follow'
    };

    if( body ) {
        headers.append( 'Content-Type', 'application/json' );
        requestOptions.body = JSON.stringify( body );
    }

    if( authenticated ) {
        headers.append( 'Authorization', 'Bearer ' + getToken() );
    }

    // sanity check: remove leading slash (if any)
    if( endpoint.substr( 0, 1 ) === '/' ) {
        endpoint = endpoint.substr( 1 );
    }

    return fetch( `${AppConfig.API_BASE_URL}/${endpoint}`, requestOptions )
        .then(async function( response ) {
            if( !response.ok ) {
                const error = await response.json();
                
                const customError : Error & { errorResponse? : Error } = new Error( 'Something went wrong with the request' );
                customError.errorResponse = error;
                
                throw customError;
            }
            
            return response.json();
        });
};

export {
    makeAjaxRequest
};