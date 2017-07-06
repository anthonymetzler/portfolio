import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import Chip from 'material-ui/Chip';


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
  },
  h2: {
    marginBottom: '0px',
    fontSize: '20px',
    marginTop: '10px',
    color: '#212121'
  },
  h3: {
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '0px'
  }
}

const Education = props => {
  const getEducation = props.educationData.map(function (item, index) {
    const getDates = item => {
      let startdate = null;
      let enddate = null;
      if (item.endDate !== '' && item.startDate !== '') {
        startdate = moment(item.startDate).format('YYYY');
        enddate = moment(item.endDate).format('YYYY');
      } else if (item.startDate === '') {
        return
      } else {
        startdate = moment(item.startDate).format('YYYY');
        enddate = 'Present';
      }
      return <span className='startdate'>: {startdate} - {enddate}</span>
    };

    const getCourses = item.courses.map(function (item, index) {
      return (
        <li key={index}>
          <Chip key={item} style={styles.chip}>
            {item}
          </Chip>
        </li>
      )
    });

    return (
      <div key={index}>
        <div>
          <h3 style={styles.h3}>{item.institution}</h3>
          <em>{getDates(item)}</em>
          <div>{item.studyType} {item.area}</div>
        </div>
        <div>
          <ul style={styles.list}>{getCourses}</ul>
        </div>

      </div>
    )
  });

  return (
    <div style={styles.main}>
      <h2 style={styles.h2}>
        <FontAwesome className='fa-user' name='mortar-board' size='lg' style={styles.inlineIcon} />
        Education
      </h2>
      {getEducation}
    </div>
  )
};

export default Education;
