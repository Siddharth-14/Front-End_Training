/**
 * Authorization for the app
 */
const LS_KEYS = {
    EMAIL: 'email',
    TOKEN: 'token'
};

function storeUserInfo( responseJson ) {
    localStorage.setItem( LS_KEYS.EMAIL, responseJson.email );
    localStorage.setItem( LS_KEYS.TOKEN, responseJson.authToken );
}

function getToken() {
    return localStorage.getItem( LS_KEYS.TOKEN );
}

function login( email, password ) {
    const myHeaders = new Headers();
    myHeaders.append( 'Content-Type', 'application/json' );

    const body = JSON.stringify({
        email: email,
        password: password
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    };

    return fetch( 'http://localhost:8001/login', requestOptions )
        .then(function( response ) {
            if( !response.ok ) {
                throw new Error( 'bad credentials' );
            }
            
            return response.json();
        })
        .then( storeUserInfo );
}
