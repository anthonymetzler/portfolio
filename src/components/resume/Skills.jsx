import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '20px',
  },
  inlineIcon: {
    paddingRight: '10px',
    color: '#c50e29',
  },
  chip: {
    margin: '3px',
  },
  list: {
    listStyleType: 'none',
    margin: '0 auto',
    padding: '0px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  h2: {
    marginBottom: '8px',
    fontSize: '2rem',
    marginTop: '8px',
    color: '#212121',
    verticalAlign: 'center',
  },
  h3: {
    fontSize: '16px',
    fontWeight: '700',
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
        <div style={{ padding: '8px 0' }}>
          <span style={styles.h3}>{`${skill.name} | `}</span>
          <span style={{ fontStyle: 'italic' }}>{skill.level}</span>
        </div>
        <ul style={styles.list}>{getSkillsList(skill.keywords)}</ul>
      </div>
    ));
    return skillsSections;
  };

  return (
    <div style={styles.main}>
      <h2 style={styles.h2}>
        <FontAwesome name="code" style={styles.inlineIcon} />
        Skills
      </h2>
      <div>{getSkillsSections(content)}</div>
    </div>
  );
};

Skills.propTypes = {
  content: PropTypes.array.isRequired,
};

export default withStyles(styles)(Skills);
