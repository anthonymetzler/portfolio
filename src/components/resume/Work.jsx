import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '12px 24px',
    textAlign: 'justify',
  },
  inlineIcon: {
    paddingRight: '8px',
    color: '#616161',
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
  workItemHeader: {
    color: '#212121',
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  workDates: {
    // fontStyle: 'italic',
    color: '#616161',
    fontWeight: 'bold',
  },
};

const WorkItem = (props) => {
  const { content } = props;

  const getWorkDates = () => {
    const startDate = moment(content.startDate).format('MMMM, YYYY');
    let endDate = null;

    if (content.endDate !== '') {
      endDate = moment(content.endDate).format('MMMM, YYYY');
    } else {
      endDate = 'Present';
    }

    return (
      <span style={styles.workDates}>{`${startDate} - ${endDate}`}</span>
    );
  };

  const getHighlights = content.highlights.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <div>
        <div style={styles.workItemHeader}>
          {content.position}
          <span style={{ fontWeight: 'normal' }}>{` @ ${content.company}`}</span>
        </div>
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
      <div style={styles.header}>
        <FontAwesome name="building" style={styles.inlineIcon} />
        Work Experience
      </div>
      {getWorkExperience()}
    </div>
  );
};

WorkItem.propTypes = {
  content: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.array,
    position: PropTypes.string,
    company: PropTypes.string,
    summary: PropTypes.array,
  }).isRequired,
};

Work.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Work);
