import { login } from '../services/auth.js';

class LoginPage {
    // same as saying this.loginForm = ... within the constructor
    loginForm = document.querySelector( 'form' );

    validate() {
        // if invalid, display error messages and return false
        // return false;
        
        return true;
    }

    async loginToApp() {
        // const { email : { value: emailValue }, password : { value: passwordValue } } = this.loginForm;

        if( !this.validate() ) {
            return;
        }
    
        await login( this.loginForm.email.value, this.loginForm.password.value );
        
        window.location = '/workshops';
    }

    // a method which is defined using arrow function syntax will ALWAYS have its context ("this") set to the object
    onSubmitLoginForm = ( event ) => {
        event.preventDefault();
        this.loginToApp();
    }

    addListeners() {
        this.loginForm.addEventListener( 'submit', this.onSubmitLoginForm );
    }

    init() {
        this.addListeners();
    }
}

// setup page on load
const page = new LoginPage();
page.init();

export default LoginPage;