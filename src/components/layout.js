import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
// import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, I am
            {` `}
            <a href="https://www.github.com/joeyr84">Joey</a>
          </footer>
        </div>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const Container = styled.div`
  width: 100vw;
  padding: 0rem;
  margin: none;
`;

export default Layout;
