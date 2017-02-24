import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const links = [
  { 
    path: '/test',
    name: 'Test'
  },
  { 
    path: '/people',
    name: 'People'
  },
  { 
    path: '/planets',
    name: 'Planets'
  },
  { 
    path: '/species',
    name: 'Species'
  },
  { 
    path: '/vehicles',
    name: 'Vehicles'
  },
  { 
    path: '/starships',
    name: 'Starships'
  },
  { 
    path: '/films',
    name: 'Films'
  },
];

const Navigation = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">SWAPI</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {links.map((link, index) => {
          return (
            <LinkContainer key={index} to={link.path}>
              <NavItem eventKey={index}>{link.name}</NavItem>
            </LinkContainer>            
          );
        })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;