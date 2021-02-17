(function() {
    const loginForm = document.querySelector( 'form' );

    function validate() {
        // if invalid, display error messages and return false
        // return false;
        
        return true;
    }
    
    async function loginToApp() {
        if( !validate() ) {
            return;
        }

        await login( loginForm.email.value, loginForm.password.value );
        
        window.location = '/workshops'; // path
    }
    
    loginForm.addEventListener( 'submit', function( event ) {
        event.preventDefault();
        loginToApp();
    });
}());