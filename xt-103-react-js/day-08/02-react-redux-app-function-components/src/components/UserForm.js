// EXERCISE: Change this to a function component
import React from 'react';

function UserForm( { username, updateUsername } )  {
    return (
        <React.Fragment>
            <input type="text" name="username" onChange={( event ) => updateUsername( event.target.value )} value={username} />
            {username}
        </React.Fragment>
    );
}

export default UserForm;