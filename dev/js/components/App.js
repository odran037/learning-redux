import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import Navigation from '../components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Grid>
        {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
