import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

const style = {
  margin: 25
};

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
      return (<li key={index}>{item}</li>)
    });

    return (
      <div key={index}>
        <h3>{item.institution}<em>{getDates(item)}</em></h3>
        <h4>{item.studyType} {item.area}</h4>
        <p>
          <ul className="list-inline">{getCourses}</ul>
        </p>

      </div>
    )
  });

  return (
    <div style={style}>
      <h2 className="text-uppercase">
        <FontAwesome className='fa-user' name='mortar-board' size='2x' style={{ padding: 3 }} />
        Education
      </h2>
      {getEducation}
    </div>
  )
};

export default Education;
