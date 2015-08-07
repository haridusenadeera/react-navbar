import React from 'react';

export default class DropdownMenu extends React.Component {
    displayName = 'Dropdown menu items'

    render() {
      return (
        <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
        </ul>
      );
    }
}
