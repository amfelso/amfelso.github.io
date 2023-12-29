import React from 'react';
import Banner from '../components/Banner.js'
import { Typography } from '@material-ui/core';

function Error(props) {
  const { classes } = props;

  return (
        <main>
          <Banner />
          <Typography align='center'>
              Sorry, this page doesn't exist.
          </Typography>
        </main>
  );
}

export default Error;