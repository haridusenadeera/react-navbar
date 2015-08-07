import React from 'react';

export default class NavbarDropdown extends React.Component {
    displayName = 'Navigation bar dropdown button'

    static propTypes = {
        displayName: React.PropTypes.string,
        children:    React.PropTypes.node
    }

    render() {
      const {displayName, children} = this.props;
      return (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {displayName}
            <span className="caret"></span>
            </a>
            {children}
        </li>
      );
    }
}
