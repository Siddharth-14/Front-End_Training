import Model from './Model.js';

class User extends Model {
    static Events = {
        EMAIL_VALIDATION_FAILED: 'EMAIL_VALIDATION_FAILED',
        PASSWORD_VALIDATION_FAILED: 'PASSWORD_VALIDATION_FAILED',
        VALIDATION_FAILED: 'VALIDATION_FAILED'
    };

    constructor( email = '', password = '' ) {
        super();
        
        this.email = email;
        this.password = password;
    }

    setEmail( email ) {
        this.email = email;
        return this.validateEmail();
    }
    
    setPassword( password ) {
        this.password = password;
        return this.validatePassword();
    }

    validateEmail() {
        const errors = [];

        if( this.email === '' ) {
            errors.push( 'Email is empty' );
            this.publish( EMAIL_VALIDATION_FAILED, errors );
        }

        return errors;
    }
    
    validatePasswordl() {
        const errors = [];

        if( this.password === '' ) {
            errors.push( 'Password is empty' );
            this.publish( PASSWORD_VALIDATION_FAILED, errors );
        }

        return errors;
    }

    validate() {
        const errors = {};

        errors.email = this.validateEmail();
        errors.password = this.validatePassword();

        if( errors.email.length || errors.password.length ) {
            this.publish( VALIDATION_FAILED, errors );
        }

        return errors;
    }
}

export default User;