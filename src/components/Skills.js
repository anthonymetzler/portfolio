import React from 'react';
import Chip from 'material-ui/Chip';
import FontAwesome from 'react-fontawesome';

const styles = {
  chip: {
    margin: 4
  },
  skills: {
    margin: 25
  }
};

const Skills = props => {
  const techSkills = props.skillsData[0];
  const skills = props.skillsData[1];

  const getSkills = skill => {
    const buildSkillList = skill.keywords.map(function (item, index) {
      return (
        <li key={index}>
          <Chip key={item} style={styles.chip}>
            {item}
          </Chip>
        </li>
      )
    });
    return buildSkillList
  }

  return (
    <div style={styles.skills}>
      <h2 className="text-uppercase">
        <FontAwesome className='fa-code' name='code' size='2x' style={{ padding: 3 }} />
        Skills
        </h2>
      <h3 className="text-uppercase" style={styles.chip}>{techSkills.name}</h3>
      <ul className="skills-list list-inline">
        {getSkills(techSkills)}
      </ul>
      <h3 className="text-uppercase" style={styles.chip}>{skills.name}</h3>
      <ul className="skills-list list-inline">
        {getSkills(skills)}
      </ul>
    </div>
  )
};

export default Skills;
