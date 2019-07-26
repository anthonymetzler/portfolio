import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '20px',
    textAlign: 'justify',
  },
  inlineIcon: {
    paddingRight: '10px',
    color: '#c50e29',
  },
  h2: {
    marginBottom: '8px',
    fontSize: '2rem',
    marginTop: '8px',
    color: '#212121',
    verticalAlign: 'center',
  },
  h3: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '4px',
  },
};

const WorkItem = (props) => {
  const { content } = props;

  const getWorkDates = () => {
    const startdate = moment(content.startDate).format('MMM, YYYY');
    let enddate = null;

    if (content.endDate !== '') {
      enddate = moment(content.endDate).format('MMM, YYYY');
    } else {
      enddate = 'Present';
    }

    return (
      <span>{`${startdate} - ${enddate}`}</span>
    );
  };

  const getHighlights = content.highlights.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <div>
        <h3 style={styles.h3}>
          <strong>{content.position}</strong>
          `, `
          {content.company}
        </h3>
      </div>
      <div>
        {getWorkDates()}
      </div>
      <p>{content.summary}</p>
      <ul>{getHighlights}</ul>
    </div>
  );
};

const Work = (props) => {
  const { content } = props;

  const getWorkExperience = () => {
    const workItems = content.map((item, index) => (
      <WorkItem key={index} content={item} />
    ));

    return workItems;
  };

  return (
    <div style={styles.main}>
      <h2 style={styles.h2}>
        <FontAwesome name="building" style={styles.inlineIcon} />
        Work Experience
      </h2>
      {getWorkExperience()}
    </div>
  );
};

WorkItem.propTypes = {
  content: PropTypes.object.isRequired,
};

Work.propTypes = {
  content: PropTypes.array.isRequired,
};

export default withStyles(styles)(Work);
