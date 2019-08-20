import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';


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
    display: 'inline-block',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0px',
  },
};

const Education = (props) => {
  const { content } = props;

  const getEducationSections = (list) => {
    const educationSections = list.map((item, index) => {
      let startdate = null;
      let enddate = null;

      if (item.startDate === '') {
        startdate = '';
        enddate = '';
      } else if (item.endDate !== '' && item.startDate !== '') {
        startdate = moment(item.startDate).format('YYYY');
        enddate = moment(item.endDate).format('YYYY');
      } else {
        startdate = moment(item.startDate).format('YYYY');
        enddate = 'Present';
      }

      return (
        <div key={index}>
          <div>
            <span><h3 style={styles.h3}>{`${item.institution}&nbsp;${item.area}`}</h3></span>
          </div>
        </div>
      );
    });
    return educationSections;
  };

  return (
    <div style={styles.main}>
      <h2 style={styles.h2}>
        <FontAwesome name="mortar-board" style={styles.inlineIcon} />
        Education
      </h2>
      <div>{getEducationSections(content)}</div>
    </div>
  );
};

Education.propTypes = {
  content: PropTypes.array.isRequired,
};

export default withStyles(styles)(Education);
