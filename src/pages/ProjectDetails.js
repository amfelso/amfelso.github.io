import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, IconButton, CardMedia, Tooltip } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Banner from '../components/Banner.js';

const projects = {
  'fd7bb2ed-6fa7-459d-975e-07cf75cc6342': {
    title: 'Mars Image Processing Pipeline',
    id: 'fd7bb2ed-6fa7-459d-975e-07cf75cc6342',
    date: 'Dec 2024',
    description: 'Built a cloud-based ETL pipeline to process and analyze Mars rover images and metadata, enhancing accessibility for scientific exploration.',
    details: `This project implemented a robust pipeline for automating the ingestion, transformation, and analysis of images captured by the Mars Curiosity Rover. Amazon Rekognition and Pinecone were utilized for feature extraction and vector storage, enabling efficient querying of Mars rover data.`,
    objectives: [
      'Automate image ingestion from NASA APIs.',
      'Transform and extract features using Amazon Rekognition.',
      'Store vector embeddings in Pinecone for querying.',
      'Ensure scalability and cost efficiency using AWS Lambda and Step Functions.',
    ],
    github: 'https://github.com/amfelso/curiosity-pipeline',
    demo: '',
    image: 'https://cff2.earth.com/uploads/2024/05/19091455/scientists-decode-the-carbon-mystery-in-martian-sediments.jpg',
  },
  'e05801f6-ee2d-4994-ba9e-5182c139acf3': {
    title: 'Mars Rover Chatbot',
    id: '4b9dc5b3-345a-4026-9df7-70d2d6b8c15b',
    date: 'Dec 2024',
    description: 'Developed an AI-powered chatbot simulating interactions with the Mars Curiosity Rover, making scientific observations and data accessible through conversational engagement.',
    details: `The Mars Rover Chatbot uses OpenAI GPT and NASA APIs to create a conversational interface for exploring Mars rover data. This project integrates real-time rover data retrieval and provides users with insights about the Martian surface and scientific discoveries in an interactive manner.`,
    objectives: [
      'Build an AI chatbot capable of interpreting Mars rover data.',
      'Fetch real-time data using NASA APIs.',
      'Implement secure, serverless architecture with AWS Lambda.',
      'Provide a user-friendly conversational interface for scientific exploration.',
    ],
    github: 'https://github.com/amfelso/rover-chatbot',
    demo: '',
    image: 'https://images.indianexpress.com/2023/06/Curiosity-postcard-featured-20230616.jpg',
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