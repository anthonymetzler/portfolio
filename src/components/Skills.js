import React from 'react';

const style = {margin: 15};

const Skills = props => {
    const getSkills = props.skillsData[0].keywords.map(function(item, index) {
      return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

  	return (
  	  <div style={style}>
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul className="skills-list list-inline">{getSkills}</ul>
      </div>
  	)
};

export default Skills;
