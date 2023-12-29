import React from 'react';
import Banner from '../components/Banner.js'
import ProjectGrid from '../components/ProjectGrid.js';

function Home(props) {
  
  return (
        <main>
          <Banner hidden={false}/>
          <ProjectGrid />
        </main>
  );
}

export default Home;
