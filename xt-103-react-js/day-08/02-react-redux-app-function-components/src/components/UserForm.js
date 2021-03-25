// EXERCISE: Change this to a function component
import React, { Component } from 'react';

class UserForm extends Component {
    render() {
        const { username, updateUsername } = this.props;

        return (
            <React.Fragment>
                <input type="text" name="username" onChange={( event ) => updateUsername( event.target.value )} value={username} />
                {username}
            </React.Fragment>
        );
    }
}

export default UserForm;