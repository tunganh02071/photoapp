import React from 'react';
import './Header.scss'
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <a
              className='header__link header__title'
              href='/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Quoc Anh
            </a>
          </Col>
          <Col xs='auto'>
            <NavLink
              exact
              className='header__link'
              to='/photos'
              activeClassName='header__link-active'
            >
              Photo App
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;