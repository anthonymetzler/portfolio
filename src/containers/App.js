import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {
  cyan800, cyan500, cyan900, redA200, redA100, redA400,
  grey50, grey200, grey300, grey400, grey500,
  white, darkBlack, fullBlack, black
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ProfileSection from './ProfileSection';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';


import NavMenu from './NavMenu';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Montserrat, Hind, sans-serif',
  palette: {
    primary1Color: grey200,
    primary2Color: grey50,
    primary3Color: grey400,
    accent1Color: redA200,
    accent2Color: redA100,
    accent3Color: redA400,
    textColor: black,
    alternateTextColor: black,
    canvasColor: grey50,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: white,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="container">
        <NavMenu profileData={profileData}/>
        <ProfileSection profileData={profileData} />
        <AboutSection aboutData={aboutData} />
        <SkillsSection skillsData={skillsData} />
        <WorkSection workData={workData} />
        <EducationSection educationData={educationData} />
      </div>
    </MuiThemeProvider>
  )
};

App.propTypes = {
  jsonObj: PropTypes.object.isRequired
}

export default App;
