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


injectTapEventPlugin();


const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;

  return (
          <MuiThemeProvider>
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
