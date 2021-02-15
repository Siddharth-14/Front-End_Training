async function getWorkshops() {
    try {
        let response, workshops;
        response = await fetch( `https://workshops-server.herokuapp.com/workshops` )
        workshops = await response.json();

        return workshops;
    } catch( err ) {
        throw new Error( 'Could not retrieve workshops' );
    }
}