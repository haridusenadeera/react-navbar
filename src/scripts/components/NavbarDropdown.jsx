import React from 'react';

export default class NavbarDropdown extends React.Component {
    displayName = 'Navigation bar dropdown button'

    render() {
      return (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Dropdown
            <span className="caret"></span>
            </a>
            {this.props.children}
        </li>
      );
    }
}
