import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';


class UserList extends Component {
  renderList() {
    return this.props.users.map((user) => {
      return (
        <Col md={4} key={user.id}>
          <Button block onClick={() => this.props.selectUser(user)}>
            {user.name}
          </Button>
        </Col>
      );
    });
  }
  render() {
    console.log('--- UserList ---');
    return (
      <div>
        <Jumbotron>
          <h1 className="text-center">SWAPI</h1>
          <hr />
          <p className="text-center">
            React &bull; Router &bull; Boostrap &bull; Redux
          </p>
        </Jumbotron>
        <Row>
          <Col md={12}>
            <Button block onClick={() => this.props.selectUser(null)}>
              UNSELECT
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>{this.renderList()}</Row>
      </div>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  console.group('--- start: user-list mapStateToProps ---');
  console.log('--- state', state);
  console.groupEnd('--- end: user-list mapStateToProps ---');
  return {
    users: state.users
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  console.group('--- start: matchDispatchToProps ---');
  console.log('--- dispatch', dispatch);
  console.groupEnd('--- end: matchDispatchToProps ---');
  return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
