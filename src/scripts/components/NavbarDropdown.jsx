import React from 'react';
import Radium from 'radium';

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
          },
          link: {
              padding: '10px 15px',
              lineHeight: '20px',
              position: 'relative',
              display: 'block',
              boxSizing: 'border-box',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              color: '#777',

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

    renderChildren = () => {
      const {children} = this.props;

      const newChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child,
            {
               open: this.state.open,
               optionSelect: this.handleOptionSelect
            });
      });
      return newChildren;
    }

    setDropdownState =(newState) => {
      this.setState({
        open: newState
      });
    }

    handleDocumentClick = () => {
      this.setDropdownState(false);
    }

    handleDropdownClick = (e) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      this.setDropdownState(!this.state.open);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    }

    render() {
      const {style, name} = this.props;
      const defStyle = this.getStyles();
      return (
        <li ref= "dropdown" style={[defStyle.dropdown, style && style]}>
            <a ref="link" onClick={this.handleDropdownClick} href="#" style={[defStyle.link]}>
                {name}{' '}
                <b style={[defStyle.caret]}></b>
            </a>
            {this.renderChildren()}
        </li>
      );
    }
}
