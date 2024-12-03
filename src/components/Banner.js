import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

function Banner(props) {
  const { classes, hidden } = props;

  return (
    <Paper className={classes.mainFeaturedPost}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            {hidden ? '' :
              <>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Hi, I'm August Felso.
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Tech Lead and software engineer with expertise in cloud architecture, big data, and scalable systems. Passionate about solving real-world challenges and advancing technologies in AI and robotics.
                </Typography>
              </>
            }
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);