class Hat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var hatClass = 'hat ' + this.props.type;
        return (
            <div className={hatClass}></div>
        );
    }
}