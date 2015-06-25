class Person extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {name: props.name};
    }

    // This method will allow us to change the current name of the person
    setName(name) {
        this.setState({name: name});
    }

    render() {
        var hat = this.props.hat;
        var hatLabel;

        if (hat === 'none') {
            hatLabel = 'I am not wearing a hat.';
        } else {
            hatLabel = 'I am wearing a '+hat+' style hat.';
        }

        return (
            <div className="person">
                <Hat hatType={hat} />
                <div className="personLabel">My name is {this.state.name} and {hatLabel}</div>
            </div>
        );
    }
}
Person.defaultProps = { name: 'anonymous', hat: 'none'};