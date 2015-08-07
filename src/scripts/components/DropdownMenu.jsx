import React from 'react';

export default class DropdownMenu extends React.Component {
    displayName = 'Dropdown menu items'

    static propTypes = {
        menuItems: React.PropTypes.array
    }

    render() {
      return (
        <ul className="dropdown-menu">
          {
            this.props.menuItems.map(item => {
              return <li key={item.name}><a href={item.href}>{item.name}</a></li>;
            })
          }
        </ul>
      );
    }
}
