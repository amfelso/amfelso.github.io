import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Banner from '../components/Banner.js'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GitHub } from '@material-ui/icons';

const projects =
{
  'e05801f6-ee2d-4994-ba9e-5182c139acf3':
  {
    title: 'Web Chat App',
    id: 'e05801f6-ee2d-4994-ba9e-5182c139acf3',
    date: 'Jul 2021',
    description: 'Web chat application using React & Firebase.',
    details: 'This real time web chat application is a personal project to explore advanced features of React & Firebase.\n\nSpecifically:\n- To structure a larger React project with many components.\n- To offer OAuth using Firebase.\n- To manage data using both Firebase storage and Realtime DB.\n- To explore Firebase cloud functions.',
    github: 'https://github.com/amfelso/web-chat-app',
    demo: 'https://chat-app-7c117.web.app/'
  },
  'fd7bb2ed-6fa7-459d-975e-07cf75cc6342':
  {
    title: 'Cloud ETL Pipeline',
    id: 'fd7bb2ed-6fa7-459d-975e-07cf75cc6342',
    date: 'Dec 2022',
    description: 'An ETL pipeline to process events from worldwide news sources.',
    details: 'This project is an ETL pipeline for the GDELT 2.0 Events Database, a dataset compiling events from worldwide news sources with an interesting variety of extracted fields. The general purpose is to prepare and load this data for meaningful human analysis.\n\nMy specific objectives in this project:\n- To gain experience with AWS Glue, a fully managed cloud ETL service.\n- To model data in a real world context.\n- To architect and orchestrate a big data ingestion using services common in the industry.\n- To improve skill with AWS relational solutions such as RDS & Redshift.\n- To understand the benefits of data lakes vs databases vs data warehouses in practice.',
    github: 'https://github.com/amfelso/gdelt-etl-aws',
    demo: ''
  }
}

function ProjectDetails(props) {
  const { id } = useParams()
  const project = projects[id]
  const navigate = useNavigate();

  return (
    <main>
      <Banner hidden={true}/>
      <div>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <Typography variant="h4" align='center'>
        {project.title}
      </Typography>
      <Typography color="textSecondary" align='center'>
        {project.date}
      </Typography>
      <Typography color="textSecondary" align='center'>
        {project.description}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={() => window.open(project.github, '_blank')}>
          <GitHub />
        </IconButton>
        {project.demo ? <Button size="small" onClick={() => window.open(project.demo, '_blank')}>Demo</Button> : ''}
      </div>
      <hr />
      <br />
      <Typography paragraph style={{ whiteSpace: 'pre-line' }}>
        {project.details}
      </Typography>
    </main>
  );
}

export default ProjectDetails;