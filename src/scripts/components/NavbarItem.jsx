import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarItem extends React.Component {
    displayName = 'Navigation bar item list'
    getStyles = () => {
      return {
            base: {
                display: 'block',
                margin: '7.5px -15px',
                listStyle: 'none',
                paddingLeft: '0',
                boxSizing: 'border-box',

                ':li': {
                    cssFloat: 'left'
                },

                '@media (min-width: 768px)': {
                    cssFloat: 'left',
                    margin: '0'
                }
            },
            list: {
                cssFloat: 'left'
            }
        };
    }
    render() {
      const defStyle = this.getStyles();
      return (
                <ul className="nav navbar-nav">
                            {
                                this.props.children.map(child => {
                                return <li>{child}</li>; })
                            }
                </ul>
        );
    }
}
