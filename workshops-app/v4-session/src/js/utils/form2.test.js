const showError = ( formControlEl, error ) => {
    const errorElement = formControlEl.closest( '.form-group' ).querySelector( '.form-control-error' );
    errorElement.innerHTML = error;
    errorElement.style.display = 'block';
};

test( '' )