import React from 'react';
import Radium from 'radium';
import NavLink from './NavLink';

@Radium
export default class Item extends React.Component {
    displayName = 'Navigation bar item'

    static propTypes = {
        link:  React.PropTypes.string,
        title: React.PropTypes.string,
        style: React.PropTypes.object
    }

    getStyles = () => {
      return {
          base: {
              position: 'relative',
              display: 'block',

              '@media (min-width: 768px)': {
                  float: 'left'
              }
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
      const {style, link, title} = this.props;
      return (
        <li key="list" style={[defStyle.base, style && style]}>
            <NavLink href={link} name={title} />
        </li>
      );
    }
}
