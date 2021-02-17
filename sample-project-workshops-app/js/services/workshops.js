async function getWorkshops() {
    try {
        const myHeaders = new Headers();
        myHeaders.append( 'Content-Type', 'application/json' );
        myHeaders.append( 'Authorization', 'Bearer ' + getToken() );

        const requestOptions = {
            method: 'GET',
            body: body,
            headers: myHeaders,
            redirect: 'follow'
        };
        
        let response, workshops;
        response = await fetch( `http://localhost:8001/workshops`, requestOptions );
        workshops = await response.json();

        return workshops;
    } catch( err ) {
        throw new Error( 'Could not retrieve workshops' );
    }
}