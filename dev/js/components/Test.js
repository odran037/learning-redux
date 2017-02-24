import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';

const Test = () => (
  <div>
    <UserList />
    <hr />
    <UserDetails />
  </div>
);

export default Test;