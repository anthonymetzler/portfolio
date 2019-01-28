import React from 'react';
import { grey, red } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import About from '../components/resume/About';
import Education from '../components/resume/Education';
import NavMenu from '../components/NavMenu';
import Skills from '../components/resume/Skills';
import Work from '../components/resume/Work';
import ProfileHeader from '../components/resume/ProfileHeader';

import 'typeface-roboto';

const resume = require('./ametzler-resume.json');

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: red,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = {
  main: {
    // minWidth: '480px',
    maxWidth: '960px',
    width: '90%',
    margin: '0 auto',
    padding: '8px 24px',
    fontFamily: 'Roboto',
  },
};

const Resume = () => {
  const {
    basics, education, skills, work,
  } = resume;

  return (
    <MuiThemeProvider theme={theme}>
      {/* <NavMenu profileData={basics} /> */}
      <Paper style={styles.main}>
        <ProfileHeader content={basics} />
        <About content={basics.summary} />
        <Skills content={skills} />
        <Work content={work} />
        <Education content={education} />
      </Paper>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(Resume);
