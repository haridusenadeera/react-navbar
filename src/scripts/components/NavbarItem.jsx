import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarItem extends React.Component {
    displayName = 'Navigation list of items'
    getStyles = () => {
      return {
            base: {
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
    render() {
      const defStyle = this.getStyles();
      return (
                <ul style= {[defStyle.base]}>
                            {
                                this.props.children.map(child => {
                                return <li style= {[defStyle.list]}>{child}</li>; })
                            }
                </ul>
        );
    }
}
