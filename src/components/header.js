import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import Image from "./image";

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <ImgDiv>
          <Image />
        </ImgDiv>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const ImgDiv = styled.div`
  max-height: 150px;
  max-width: 150px;
`;

export default Header;
