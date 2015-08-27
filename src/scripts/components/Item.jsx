import React from 'react';
import Radium from 'radium';

@Radium
export default class Item extends React.Component {
    displayName = 'Navigation bar item'

    static propTypes = {
<<<<<<< HEAD
        liStyle: React.PropTypes.object,
        aStyle: React.PropTypes.object
=======
        link:  React.PropTypes.string,
        title: React.PropTypes.string,
        style: React.PropTypes.object
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
    }

    getStyles = () => {
      return {
<<<<<<< HEAD
          list: {
              position: 'relative',
              display: 'block',
              boxSizing: 'border-box',
              height: '40px',
=======
          base: {
              position: 'relative',
              display: 'block',
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08

              '@media (min-width: 768px)': {
                  float: 'left'
              }
          },
          link: {
              padding: '10px 15px',
              lineHeight: '20px',
              position: 'relative',
              display: 'block',
              boxSizing: 'border-box',
              textDecoration: 'none',
<<<<<<< HEAD
              color: '#777',
              backgroundColor: 'transparent',
=======
              backgroundColor: 'transparent',
              color: '#777',
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08

              ':hover': {
                  color: '#333',
                  backgroundColor: 'transparent'
              },

              ':focus': {
                  color: '#333',
                  backgroundColor: 'transparent'
              },

              '@media (min-width: 768px)': {
                  paddingTop: '15px',
                  paddingBottom: '15px'
              }
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
<<<<<<< HEAD
      const {aStyle, liStyle, link, title} = this.props;
      return (
          <li key="list" style={[defStyle.list, liStyle && liStyle]}>
              <a key ="link"style ={[defStyle.link, aStyle && aStyle]} href={link}>
                  {title}
              </a>
          </li>
=======
      const {style, link, title} = this.props;
      return (
        <li ref="list" style={[defStyle.base, style && style]}>
            <a ref="link" href={link} style={[defStyle.link]}>{title}</a>
        </li>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
      );
    }
}
