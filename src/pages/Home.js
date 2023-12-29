import React from 'react';
import Banner from '../components/Banner.js'
import ProjectGrid from '../components/ProjectGrid.js';

function Home(props) {
  const { classes } = props;

  return (
        <main>
          <Banner />
          <ProjectGrid />
        </main>
  );
}

export default Home;
