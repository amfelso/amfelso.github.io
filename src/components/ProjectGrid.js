import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
        height: '260px',
        "&:hover": {
            background: theme.palette.grey[100],
            cursor: "pointer"
          },
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 180,
    },
});

const projects = [
    {
        title: 'Mars Rover Chatbot',
        id: 'e05801f6-ee2d-4994-ba9e-5182c139acf3',
        date: 'Dec 2024',
        description: 'Created an AI-powered chatbot that simulates interactions with the Mars Curiosity Rover. Integrated NASA APIs to retrieve data and provided conversational capabilities for exploring Martian observations and science.',
        technologies: ['Python', 'OpenAI GPT', 'AWS Lambda', 'React'],
        highlights: [
            'Developed conversational AI for an engaging, Mars-specific chatbot.',
            'Fetched real-time rover data using NASA APIs.',
            'Implemented a secure and efficient backend using AWS Lambda.',
        ],
        image: 'https://images.indianexpress.com/2023/06/Curiosity-postcard-featured-20230616.jpg',
    },
    {
        title: 'Mars Image Processing Pipeline',
        id: 'fd7bb2ed-6fa7-459d-975e-07cf75cc6342',
        date: 'Dec 2024',
        description: 'Built a cloud-based ETL pipeline to process Mars rover images and metadata. Designed the pipeline to extract, transform, and analyze rover data, enhancing accessibility for scientific exploration.',
        technologies: ['AWS Lambda', 'S3', 'Amazon Rekognition', 'Step Functions', 'Pinecone'],
        highlights: [
            'Automated ingestion and transformation of Mars rover images.',
            'Integrated Amazon Rekognition for image feature extraction.',
            'Used Pinecone to store and query vector embeddings of image data.',
        ],
        image: 'https://cff2.earth.com/uploads/2024/05/19091455/scientists-decode-the-carbon-mystery-in-martian-sediments.jpg',
    },
];

function ProjectGrid(props) {
    const { classes } = props;
    const navigate = useNavigate();

    return (
        <Grid container spacing={4}>
            {projects.map(project => (
                <Grid item key={project.title} xs={12} md={6}>
                    <Card className={classes.card} onClick={()=>navigate(`/project/${project.id}`)}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {project.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {project.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image={project.image}
                                title="Image title"
                            />
                        </Hidden>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

ProjectGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectGrid);