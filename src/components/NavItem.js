import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export const NavItem = ({ path, text }) => {
  return (
    <LinkContainer to={path}>
      <Button className="mx-3">{text}</Button>
    </LinkContainer>
  );
};
