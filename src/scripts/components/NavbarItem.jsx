import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarItem extends React.Component {
    displayName = 'Navigation list of items'
    getStyles = () => {
      return {
          base: {
              float: 'left',
              margin: '7.5px -15px',
              listStyle: 'outside none none',
              paddingLeft: '0',
              boxSizing: 'border-box',

              fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
              fontSize: '14px',
              color: '#333',

              '@media (min-width: 768px)': {
                  cssFloat: 'left',
                  margin: '0'
              }
          },
          list: {
              float: 'left',
              position: 'relative',
              display: 'block',
              boxSizing: 'border-box'
          }
      };
    }

    renderChildren() {
      const defStyle = this.getStyles();
      const {listyle} = this.props;
      return React.Children.map(this.props.children, child => {
        return (
          <li style= {[defStyle.list, listyle && listyle]}>
            {child}
          </li>);
      });
    }

    render() {
      const defStyle = this.getStyles();
      const {style} = this.props;
      return (
        <ul style= {[defStyle.base, style && style]}>
          {this.renderChildren()}
        </ul>
      );
    }
}
