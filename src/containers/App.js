import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from '../components/Nav';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ProfileSection from './ProfileSection';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, redA200, teal500, teal700, grey50, red700, red900, indigo700
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';


injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: indigo700,
    primary3Color: redA200,
    accent1Color: redA200,
    accent2Color: grey400,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: grey50,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
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
                <Nav />
                <ProfileSection profileData={profileData} />
                <AboutSection aboutData={aboutData} />
                <WorkSection workData={workData} />
                <SkillsSection skillsData={skillsData} />
                <EducationSection educationData={educationData} />
            </div>
          </MuiThemeProvider>
    )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
