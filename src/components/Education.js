import React from 'react';
import moment from 'moment';

const style = {margin: 15};

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <p>Studied: {startdate} - {enddate}</p>
  				</div>
        )
  	});

  	return (
  	  <div style={style}>
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
        {getEducation}
      </div>
  	)
};

export default Education;
