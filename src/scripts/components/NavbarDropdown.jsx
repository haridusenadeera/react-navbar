import React from 'react';

export default class NavbarDropdown extends React.Component {
    displayName = 'Navigation bar dropdown button'

    static propTypes = {
        name: React.PropTypes.string
    }

    render() {
      const {name, children} = this.props;
      return (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {name}
            <span className="caret"></span>
            </a>
            {children}
        </li>
      );
    }
}
