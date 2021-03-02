import { login } from '../services/auth.js';
import User from '../models/User.js';

class LoginPage {
    // same as saying this.loginForm = ... within the constructor
    loginForm = document.querySelector( 'form' );
    user = new User( '', '' );

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
    
        await login(  );
        
        window.location = '/workshops';
    }

    onInputEmail = ( event ) => {
        this.user.setEmail( event.target.value );
    }
    
    onInputPassword = ( event ) => {
        this.user.setPassword( event.target.value );
    }

    // a method which is defined using arrow function syntax will ALWAYS have its context ("this") set to the object
    onSubmitLoginForm = ( event ) => {
        event.preventDefault();
        this.loginToApp( this.loginForm.email.value, this.loginForm.password.value );
    }

    addListeners() {
        this.loginForm.addEventListener( 'submit', this.onSubmitLoginForm );
        this.loginForm.email.addEventListener( 'input', this.onInputEmail );
        this.loginForm.password.addEventListener( 'input', this.onInputPassword );
    }

    init() {
        this.addListeners();
    }
}

// setup page on load
const page = new LoginPage();
page.init();

export default LoginPage;