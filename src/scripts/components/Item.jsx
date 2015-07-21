import React from 'react';
import Radium from 'radium';

@Radium
export default class Item extends React.Component {
    displayName = 'Navigation bar item link'
    getStyles = () => {
      return {
            base: {
                padding: '10px 15px',
                lineHeight: '20px',
                color: '#777',
                position: 'relative',
                display: 'block',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                boxSizing: 'border-box',

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
      const {link, title} = this.props;
      return (
            <a style= {[defStyle.base]} href={link}>
                {title}
            </a>
        );
    }
}
