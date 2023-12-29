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
        height: '180px',
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
        title: 'Web Chat App',
        id: 'e05801f6-ee2d-4994-ba9e-5182c139acf3',
        date: 'Jul 2021',
        description: 'Web chat application using React & Firebase.',
        image: 'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'
    },
    {
        title: 'Cloud ETL Pipeline',
        id: 'fd7bb2ed-6fa7-459d-975e-07cf75cc6342',
        date: 'Dec 2022',
        description: 'An ETL pipeline to process events from worldwide news sources.',
        image: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png'
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