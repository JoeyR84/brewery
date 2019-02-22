import React, { Component } from "react";
import styled from "@emotion/styled";

export default class intro extends Component {
  render() {
    return <Container>Brewery & Taproom</Container>;
  }
}

const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: 30rem;
`;
