import React from 'react';
import Chip from 'material-ui/Chip';
import {cyan500} from 'material-ui/styles/colors';



const styles = {
chip: {
  margin: 4
},
skills: {
  margin: 15
}
};

const Skills = props => {
    const getSkills = props.skillsData[0].keywords.map(function(item, index) {
      return (
      <li key={index}>
        <Chip 
            key={item} 
            backgroundColor={cyan500}
            style={styles.chip} >{item}
        </Chip></li>)
    });

  	return (
  	  <div style={styles.skills}>
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul className="skills-list list-inline">{getSkills}</ul>
      </div>
  	)
};

export default Skills;
