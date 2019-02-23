import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import Image from './image';

const Header = () => (
  <header>
    <Container>
      <Link to='/'>
        <ImgDiv>
          <Image style={{ minWidth: 150 }} />
        </ImgDiv>
      </Link>
      <LinkDiv>
        <NavLink to='/beers'>Beers</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/store'>Store</NavLink>
        <NavLink to='/taproom'>Taproom</NavLink>
      </LinkDiv>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const ImgDiv = styled.div`
  height: 100%;
  max-width: 100px;
  min-width: 100px;
  min-height: 100px;
`;
const LinkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45rem;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;
const NavLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: #000;
`;

export default Header;
