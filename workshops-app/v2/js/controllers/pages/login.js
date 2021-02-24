import Component from '../Component';
import AppConfig from '../../config.js';

class Login extends Component {
    state = {
        user: new User()
    };

    addListeners() {
        const loginForm = Handlebars.compile( document.querySelector( '#tpl-login-page' ).innerHTML );

        loginForm.email.addEventListener( 'input', function( event ) {
            this.state.user.setEmail( event.target.value );
        });
        
        loginForm.password.addEventListener( 'input', function() {
            user.setPassword( this.value );
        });
    
        loginForm.addEventListener( 'submit', function( event ) {
            event.preventDefault();
            loginToApp();
        });
    }

    render() {
        const tplLoginPage = Handlebars.compile( document.querySelector( '#tpl-login-page' ).innerHTML );
        tplLoginForm( this.props );
        this.addListeners();
    }
}

export default Login;