import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

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
  sectionHeader: {
    display: 'inline-block',
    color: '#212121',
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  section: {
    marginBottom: '8px',
  },
};

const Education = (props) => {
  const { content } = props;

  const getEducationSections = (list) => {
    const educationSections = list.map((item, index) => {
      let { startDate, endDate } = item;

      if (startDate === '') {
        startDate = '';
        endDate = '';
      } else if (endDate !== '' && startDate !== '') {
        startDate = moment(startDate).format('YYYY');
        endDate = moment(endDate).format('YYYY');
      } else {
        startDate = moment(startDate).format('YYYY');
        endDate = 'Present';
      }

      return (
        <div key={index}>
          <div style={styles.section}>
            <div style={styles.sectionHeader}>{item.institution}</div>
            <div>
              {item.area}
            </div>
          </div>
        </div>
      );
    });
    return educationSections;
  };

  return (
    <div style={styles.main}>
      <div style={styles.header}>
        <FontAwesome name="mortar-board" style={styles.inlineIcon} />
        Education
      </div>
      <div>{getEducationSections(content)}</div>
    </div>
  );
};

Education.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Education);
