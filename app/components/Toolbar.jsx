import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class Toolbar extends React.Component{

  constructor(){
    super();
  }

  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  render(){
    return <AppBar title={this.props.title} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
  }

}

Toolbar. childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

