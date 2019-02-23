import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const Intro = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "beers.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Image fluid={data.placeholderImage.childImageSharp.fluid} />
        <Title>
          <TitleBack>Brewery & Taproom</TitleBack>
        </Title>
      </Container>
    )}
  />
);
export default Intro;

const Container = styled.div`
  width: 100%;
  height: 450px;
`;
const Image = styled(Img)`
  max-height: 450px;
  position: relative;
  width: 100%;
`;
const Title = styled.h1`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
`;
const TitleBack = styled.span`
  color: white;
  font: bold 24px/45px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
`;
