import React, { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { grey, red } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Sheet from '../components/Sheet';

import AboutSection from '../containers/AboutSection';
import EducationSection from '../containers/EducationSection';
import NavMenu from '../containers/NavMenu';
import ProfileSection from '../containers/ProfileSection';
import SkillsSection from '../containers/SkillsSection';
import WorkSection from '../containers/WorkSection';

injectTapEventPlugin();

const muiTheme = createMuiTheme({
  palette: {
    primary1Color: grey[200],
    primary2Color: grey[50],
    primary3Color: grey[400],
    accent1Color: red.A200,
    accent2Color: red.A100,
    accent3Color: red.A400,
    textColor: grey[900],
    alternateTextColor: grey[900],
    canvasColor: grey[50],
    borderColor: grey[300],
    disabledColor: grey[700],
    pickerHeaderColor: grey[50],
    clockCircleColor: grey[700],
    shadowColor: grey[900],
  },
});

const style = {
  minWidth: '480px',
  maxWidth: '1280px',
  width: '80%',
  margin: '0 auto',
};

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Sheet style={style}>
        <NavMenu profileData={profileData} />
        <ProfileSection profileData={profileData} />
        <AboutSection aboutData={aboutData} />
        <SkillsSection skillsData={skillsData} />
        <WorkSection workData={workData} />
        <EducationSection educationData={educationData} />
      </Sheet>
    </MuiThemeProvider>
  );
};

export default App;
