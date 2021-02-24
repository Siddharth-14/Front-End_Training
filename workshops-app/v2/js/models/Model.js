class Model {
    validate() {
        throw new Error( `validate not defined() for ${this.constructor}` );
    }
}

export default Model;