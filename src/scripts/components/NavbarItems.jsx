import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarItems extends React.Component {
    displayName = 'Navigation list of items'

    static propTypes = {
        style: React.PropTypes.object,
        children: React.PropTypes.node
    }

    state = {
        open: false
    }

    getStyles = () => {
      return {
          base: {
              margin: '7.5px -15px',
              listStyle: 'outside none none',
              paddingLeft: '0',
              boxSizing: 'border-box',

              fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
              fontSize: '14px',

              '@media (min-width: 768px)': {
                  float: 'left',
                  margin: '0'
              }
          },
          collapse: {
              paddingRight: '15px',
              paddingLeft: '15px',
              overflowX: 'visible',
              borderTop: '1px solid transparent',
              boxShadow: '0px 1px 0px rgba(255, 255, 255, .1) inset',
              borderColor: '#E7E7E7',
              marginRight: '-15px',
              marginLeft: '-15px',
              maxHeight: '340px',
              boxSizing: 'border-box',
              display: 'none',

              '@media (min-width: 768px)': {
                  marginRight: '0px',
                  marginLeft: '0px',
                  paddingRight: '0px',
                  paddingLeft: '0px',
                  height: 'auto',
                  paddingBottom: '0px',
                  display: 'block',
                  overflow: 'visible',
                  width: 'auto',
                  borderTop: '0px none',
                  boxShadow: 'none'
              }
          }
      };
    }

    onClickHandler = (activeIndex) => {
      this.setState({
            activeIndex: activeIndex
        });
    }

    renderChildren = () => {
      const {children} = this.props;
      const {activeIndex} = this.state;
      return React.Children.map(children, (child, index) => {
        return React.cloneElement(child,
            {
                index: index,
                activeIndex: activeIndex,
                parentCallBack: this.onClickHandler
            });
      });
    }

    render() {
      const defStyle = this.getStyles();
      const {style} = this.props;
      return (
          <div ref ="collapse" style={[defStyle.collapse]}>
              <ul ref="navitems" style={[defStyle.base, style && style]}>
                  {this.renderChildren()}
              </ul>
          </div>
      );
    }
}
