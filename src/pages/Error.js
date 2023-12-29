import React from 'react';
import Banner from '../components/Banner.js'
import { Typography } from '@material-ui/core';

function Error(props) {

  return (
        <main>
          <Banner hidden={false}/>
          <Typography align='center'>
              Sorry, this page doesn't exist.
          </Typography>
        </main>
  );
}

export default Error;