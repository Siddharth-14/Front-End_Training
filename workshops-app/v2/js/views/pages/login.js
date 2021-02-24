import Login from '../../controllers/pages/login.js';
const loginForm = document.querySelector( 'form' );

async function loginToApp() {
    if( !validate() ) {
        return;
    }

    await login( loginForm.email.value, loginForm.password.value );
    
    window.location = '/workshops';
}

// initial page setup
function init() {
    new Login({
        action: 
    });
}

init();