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
        description:
            'Web chat application using React & Firebase.',
    },
    {
        title: 'Cloud ETL Pipeline',
        id: 'fd7bb2ed-6fa7-459d-975e-07cf75cc6342',
        date: 'Dec 2022',
        description:
            'An ETL pipeline to process events from worldwide news sources.',
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
                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
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