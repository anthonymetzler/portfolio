import React from 'react';
import Chip from 'material-ui/Chip';
import FontAwesome from 'react-fontawesome';

const styles = {
  main: {
    padding: '20px',
  },
  inlineIcon : {
    paddingRight: '10px',
    color: '#c50e29'
  },
  chip: {
    margin: '3px'
  },
  list: {
    listStyleType: 'none',
    margin: '0 auto',
    padding: '0px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
};

const Skills = props => {
  const skills = props.skillsData[0];
  const techSkills = props.skillsData[1];

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
    <div style={styles.main}>
      <h2>
        <FontAwesome className='fa-code' name='code' size='lg' style={styles.inlineIcon} />
        Skills
      </h2>
      <h3 className="text-uppercase" style={styles.chip}>{skills.name}</h3>
      <ul style={styles.list}>
        {getSkills(skills)}
      </ul>
      <h3 className="text-uppercase" style={styles.chip}>{techSkills.name}</h3>
      <ul style={styles.list}>
        {getSkills(techSkills)}
      </ul>
    </div>
  )
};

export default Skills;
