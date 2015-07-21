import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarHeader extends React.Component {
    displayName = 'Navigation bar header'
    getStyles = () => {
      return {
            base: {
                float: 'left',
				marginRight: '0px',
				marginLeft: '0px',
				boxSizing: 'border-box'
            },
            brand: {
				color: '#777',
				float: 'left',
				height: '50px',
				padding: '15px 15px',
				fontSize: '18px',
				lineHeight: '20px',
				textDecoration: 'none',
				backgroundColor: 'transparent',
				boxSizing: 'border-box',
				fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',

				':hover': {
					textDecoration: 'none',
					color: '#5e5e5e',
					backgroundColor: 'transparent'
                },

				':focus': {
					textDecoration: 'none',
					color: '#5e5e5e',
					backgroundColor: 'transparent'
                },

                '@media (min-width: 768px)': {
					marginLeft: '-15px'
                }
            }
        };
    }
    render() {
      const defStyle = this.getStyles();
      const {href, name} = this.props;
      return (
		<div style= {[defStyle.base]}>
			<a style= {[defStyle.brand]} href={href}>{name}</a>
		</div>
        );
    }
}
