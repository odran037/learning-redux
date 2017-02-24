import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
  render() {
    console.log('--- UserDetail ---', this.props.user);
    if (!this.props.user) {
      return (<div className="text-success">Select a spaceship...</div>);
    }
    return (
      <Row>
        <Col md={3}>
          <img src={this.props.user.thumbnail} />
        </Col>
        <Col md={9}>
          <h2 className="text-success">{this.props.user.name}</h2>
          <h4>model: {this.props.user.model}</h4>
          <h4>hyperdrive_rating: {this.props.user.hyperdrive_rating}</h4>
          <h4>manufacturer: {this.props.user.manufacturer}</h4>
        </Col>
      </Row>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  console.group('--- start: user-detail mapStateToProps ---');
  console.log('--- state', state);
  console.groupEnd('--- end: user-detail mapStateToProps ---');
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
