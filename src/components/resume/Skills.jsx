import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '12px 24px',
  },
  inlineIcon: {
    paddingRight: '8px',
    color: '#616161',
  },
  chip: {
    margin: '2px',
  },
  list: {
    listStyleType: 'none',
    margin: '0 auto',
    padding: '0px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    marginBottom: '8px',
    fontSize: '2rem',
    marginTop: '8px',
    color: '#212121',
    fontWeight: 700,
    verticalAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  skillHeader: {
    color: '#212121',
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '0px',
  },
};

const Skills = (props) => {
  const { content } = props;

  const getSkillsList = (list) => {
    const skillList = list.map((keyword, index) => (
      <li key={index}>
        <Chip style={styles.chip} label={keyword} />
      </li>
    ));
    return skillList;
  };

  const getSkillsSections = (list) => {
    const skillsSections = list.map((skill, index) => (
      <div key={index}>
        <div style={{ padding: '12px 0' }}>
          <span style={styles.skillHeader}>{`${skill.name} | `}</span>
          <span style={{ color: '#616161', fontSize: '1.25rem' }}>{skill.level}</span>
        </div>
        <ul style={styles.list}>{getSkillsList(skill.keywords)}</ul>
      </div>
    ));
    return skillsSections;
  };

  return (
    <div style={styles.main}>
      <div style={styles.header}>
        <FontAwesome name="code" style={styles.inlineIcon} />
        Skills
      </div>
      <div>{getSkillsSections(content)}</div>
    </div>
  );
};

Skills.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Skills);
