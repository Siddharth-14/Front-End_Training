const getFormData = ( formEl ) => {
    const formData = {}; // { email: 'john.doe@example.com' , password: 'password' }

    const inputs = formEl.elements;

    for( let i = 0; i < inputs.length; i += 1 ) {
        const input = inputs[i];

        if( input.name !== '' ) {
            formData[input.name] = input.value;
        }
    }

    return formData;
};

describe( 'getFormData function', () => {
    it( 'should extract form input values into an object and return it', () => {
        // arrange
        document.body.innerHTML = `
            <form>
                <input type="email" name="email" value="john.doe@example.com" />
                <input type="password" name="password" value="password" />
            </form>
        `;

        const formEl = document.querySelector( 'form' );

        // act
        const formData = getFormData( formEl );

        // assert
        expect( formData ).toEqual({
            email: 'john.doe@example.com',
            password: 'password'
        })
    });
});