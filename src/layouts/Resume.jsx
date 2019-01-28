import React from 'react';

import { grey, red } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Sheet from '../components/Sheet';

import About from '../components/resume/About';
import EducationSection from '../containers/EducationSection';
import NavMenu from '../containers/NavMenu';
import ProfileSection from '../containers/ProfileSection';
import SkillsSection from '../containers/SkillsSection';
import WorkSection from '../containers/WorkSection';

const resume = require('./ametzler-resume.json');

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: red,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const style = {
  minWidth: '480px',
  maxWidth: '1280px',
  width: '80%',
  margin: '0 auto',
};

const Resume = () => {
  const { basics, education, skills, work } = resume;

  return (
    <MuiThemeProvider theme={theme}>
      <Sheet style={style}>
        <NavMenu profileData={basics} />
        <ProfileSection profileData={basics} />
        <About content={basics.summary} />
        <SkillsSection skillsData={skills} />
        <WorkSection workData={work} />
        <EducationSection educationData={education} />
      </Sheet>
    </MuiThemeProvider>
  );
};

export default Resume;
