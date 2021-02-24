class Component {
    constructor( props, container = null ) {
        this.props = props;
        this.container = container;
    }

    setContainer( container ) {
        this.container = container;
    }

    render() {
        console.log( 'todo: Component::render()' );
    }
}

export default Component;