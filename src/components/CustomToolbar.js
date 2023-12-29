import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { GitHub, LinkedIn } from '@material-ui/icons';

const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    }
});

function CustomToolbar(props) {
    const { classes } = props;

    return (
        <Toolbar className={classes.toolbarMain}>
            <IconButton component={Link} to="/">
                <HomeIcon />
            </IconButton>
            <IconButton onClick={() => window.open('https://github.com/amfelso', '_blank')}>
                <GitHub />
            </IconButton>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/augustfelso/', '_blank')}>
                <LinkedIn />
            </IconButton>
            <IconButton onClick={() => window.open('https://portfolio-assets-122823.s3.amazonaws.com/SampleResume.pdf', '_blank')}>
                <FileDownloadIcon />
            </IconButton>
        </Toolbar>
    );
}

CustomToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomToolbar);
