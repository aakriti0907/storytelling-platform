import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

export class ChoiceLogin extends Component {

  // constructor(props){
  //   super(props);
  // }
  onNavigateNewbooks = () => {
      this.props.history.push("/writer/newbook");
  }

  onNavigateGenerator = () => {
    this.props.history.push("/idea_generator");
}

    render() {
    return (
        <MuiThemeProvider >
          <React.Fragment>
            <AppBar title="Welcome Author" />
            
            <br />
          
            <RaisedButton
               label="Start A New Book!"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateNewbooks}
            />
              <br />
              <br />
              <br />
            <RaisedButton
               label="Update Existing Book!"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateNewbooks}
            />
              <br />
              <br />
              <br />
            <RaisedButton
               label="Idea Generator"
               primary={true}
               style={styled.button}
               onClick={this.onNavigateGenerator}
            />
          
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
}

export default ChoiceLogin ;