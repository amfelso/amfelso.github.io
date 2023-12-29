import React from 'react';
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner.js'
import { Typography } from '@material-ui/core';

function ProjectDetails(props) {
  const { id }= useParams()

  return (
        <main>
          <Banner />
          <Typography align='center'>
              Welcome to the details page for project {id}.
          </Typography>
        </main>
  );
}

export default ProjectDetails;