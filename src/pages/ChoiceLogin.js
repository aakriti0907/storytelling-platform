import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

export class ChoiceLogin extends Component {

  // constructor(props){
  //   super(props);
  // }
  onNavigateWriter = () => {
      this.props.history.push("/writer");
  }

  render(){
    return (
        <MuiThemeProvider >
          <React.Fragment>
            <AppBar title="Login as a..." />
            
            <br />
          
            <RaisedButton
               label="Writer"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateWriter}
              />
              <br /><br /><br />
              <RaisedButton
               label="Reader"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateWriter}
              />
              <br /><br /><br />
              <RaisedButton
               label="Editor"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateWriter}
              />
              <br /><br /><br />
              <RaisedButton
               label="View My Profile"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateWriter}
              />
              <br /><br /><br />
            
          
          </React.Fragment>
        </MuiThemeProvider>
      );
  }
}

export default ChoiceLogin ;