import React from 'react';
import Radium from 'radium';
import NavLink from './NavLink';

@Radium
export default class NavbarDropdown extends React.Component {
    displayName = 'Navigation bar dropdown button'

    static propTypes = {
        name: React.PropTypes.string
    }

    state = {
      open: false
    }

    getStyles = () => {
      return {
          dropdown: {
            position: 'relative',
            display: 'block',

            '@media (min-width: 768px)': {
                float: 'left'
            }
          },
          caret: {
              display: 'inline-block',
              width: '0',
              height: '0',
              marginLeft: '2px',
              verticalAlign: 'middle',
              borderTop: '4px dashed',
              borderRight: '4px solid transparent',
              borderLeft: '4px solid transparent'
          }
      };
    }

    renderChildren = () => {
      const {children} = this.props;
      if (open) {
        const newChildren = React.Children.map(children, (child) => {
          return React.cloneElement(child,
                        {
                           open: this.state.open
                       });
        });
        return newChildren;
      }
      return children;
    }

    dropdownToggle = () => {
      this.setState({open: !this.state.open});
    }

    render() {
      const {style, renderChildren} = this.props;
      const defStyle = this.getStyles();
      return (
        <li style={[defStyle.dropdown, style && style]}>
            <NavLink onClick = {this.dropdownToggle} href="#" name="Dropdown">
                <b style={[defStyle.caret]}></b>
            </NavLink>
            {this.props.children}
        </li>
      );
    }
}
