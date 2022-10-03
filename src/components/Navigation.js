import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavItem } from './NavItem';

export const Navigation = () => {
  const items = [
    { path: '/', text: 'Home' },
    { path: '/new', text: 'New' },
    { path: '/test', text: 'Test' },
    { path: '/statistics', text: 'Statistics' },
  ];

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          {items.map((el) => (
            <NavItem path={el.path} text={el.text} key={el.path} />
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};
