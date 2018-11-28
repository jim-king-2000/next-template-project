import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import styled, { createGlobalStyle } from 'styled-components';
import Auth from '../auth/Auth';
import UnauthorizedHome from '../components/UnauthorizedHome';
import Home from '../components/Home';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    min-width: 1024px;
    min-heiht: 768px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

class Index extends Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps({ req }) {
    const cookies = new Cookies(req && req.headers.cookie);
    const isAuthenticated = Auth.isAuthenticated(cookies);
    return {
      isAuthenticated
    };
  }

  render() {
    return (
      <Flex>
        <title>Next template project</title>
        {this.props.isAuthenticated
          ? <Home />
          : <UnauthorizedHome />}
        <GlobalStyle />
      </Flex>
    );
  }
}

export default Index;