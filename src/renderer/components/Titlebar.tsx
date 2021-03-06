import * as React from 'react';
import styled from '@emotion/styled';

import NetworkStatus from './NetworkStatus';
import Navigation from './Navigation';

const Toolbar = () => (
  <Container>
    <Navigation />
    <NetworkStatus />
  </Container>
);

const Container = styled('div')`
  position: sticky;
  top: 0;
  height: 36px;
  padding: 0 0.5rem;
  padding-left: 75px;
  display: grid;
  justify-content: end;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 0.5rem;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px solid #eee;
  -webkit-app-region: drag;
`;

export default Toolbar;
