import Component from '../Component.js';
import AppConfig from '../../config.js';
import User from '../../models/User.js';

class Login extends Component {
    state = {
        user: new User()
    };

    addListeners() {
        const loginForm = document.querySelector( '#login-form' );
        console.log( loginForm );

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

    renderView() {
        const tplLoginView = Handlebars.compile( document.querySelector( '#tpl-login-page' ).innerHTML );
        document.querySelector( '#root' ).innerHTML = tplLoginView({
            ...this.props,
            AppConfig
        });
        this.addListeners();
    }
}

export default Login;