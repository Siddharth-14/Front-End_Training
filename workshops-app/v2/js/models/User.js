import Model from './Model.js';

class User extends Model {
    constructor( email = '', password = '' ) {
        super();
        
        this.email = email;
        this.password = password;
    }

    setEmail( email ) {
        this.email = email;
    }
    
    setPassword( password ) {
        this.password = password;
    }

    validate() {
        let isValid = true;

        const errors = {
            email: [],
            password: []
        };

        if( this.email === '' ) {
            isValid = false;
            errors.email.push( 'Email is required' );
        }
        
        if( this.password === '' ) {
            isValid = false;
            errors.password.push( 'Password is required' );
        }

        if( isValid ) {
            return null;
        } else {
            return errors;
        }
    }
}

export default User;