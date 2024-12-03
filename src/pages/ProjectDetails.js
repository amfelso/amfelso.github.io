import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, IconButton, CardMedia, Tooltip } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Banner from '../components/Banner.js';

const projects = {
  'e05801f6-ee2d-4994-ba9e-5182c139acf3': {
    title: 'Realtime Web Chat Application',
    id: 'e05801f6-ee2d-4994-ba9e-5182c139acf3',
    date: 'Jul 2021',
    description: 'Built a scalable, real-time chat application to enhance user engagement and explore advanced frontend-backend integrations.',
    details: `This project showcased the integration of React with Firebase for a seamless chat experience, focusing on frontend design, authentication, and real-time updates.`,
    objectives: [
      'Develop a responsive interface using React.',
      'Implement secure OAuth authentication.',
      'Enable real-time communication using Firebase Realtime Database.',
      'Showcase backend scalability with serverless architecture.',
    ],
    github: 'https://github.com/amfelso/web-chat-app',
    demo: 'https://chat-app-7c117.web.app/',
    image: 'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png',
  },
  'fd7bb2ed-6fa7-459d-975e-07cf75cc6342': {
    title: 'Cloud ETL Pipeline',
    id: 'fd7bb2ed-6fa7-459d-975e-07cf75cc6342',
    date: 'Dec 2022',
    description: 'Designed and implemented a cloud-native ETL pipeline to process and analyze large datasets from global news sources.',
    details: `The project emphasized efficient data ingestion and transformation, leveraging AWS Glue, Lambda, and Redshift for scalable and cost-effective solutions.`,
    objectives: [
      'Leverage AWS Glue for orchestrating big data ETL workflows.',
      'Model and transform global news datasets for meaningful analytics.',
      'Deploy AWS Redshift for querying large datasets efficiently.',
      'Compare practical use cases for data lakes, warehouses, and relational databases.',
    ],
    github: 'https://github.com/amfelso/gdelt-etl-aws',
    demo: '',
    image: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png',
  },
};

function ProjectDetails(props) {
  const { id } = useParams();
  const project = projects[id];
  const navigate = useNavigate();

  return (
    <main>
      <Banner hidden={true} />
      <div style={{ margin: '20px 0' }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      
      {/* Project Header */}
      <Typography variant="h3" align="center" gutterBottom>
        {project.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" align="center">
        {project.date}
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center" paragraph>
        {project.description}
      </Typography>
      
      {/* Compact Media Section with Links */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        {project.image && (
          <CardMedia
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain',
              marginRight: '15px',
            }}
            component="img"
            image={project.image}
            title={project.title}
          />
        )}
        <Tooltip title="View on GitHub">
          <IconButton onClick={() => window.open(project.github, '_blank')}>
            <GitHub />
          </IconButton>
        </Tooltip>
        {project.demo && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open(project.demo, '_blank')}
          >
            View Demo
          </Button>
        )}
      </div>
      
      <hr style={{ margin: '30px 0' }} />
      
      {/* Project Details Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Project Details
          </Typography>
          <Typography paragraph style={{ whiteSpace: 'pre-line' }}>
            {project.details}
          </Typography>
        </Grid>
        
        {/* Key Objectives Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Key Objectives
          </Typography>
          <ul>
            {project.objectives.map((objective, index) => (
              <li key={index}>
                <Typography variant="body2">{objective}</Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </main>
  );
}

export default ProjectDetails;