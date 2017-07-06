import React from 'react';
import moment from 'moment';

const styles = {
  h3: {
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '0px'
  }
}

const WorkItem = props => {
  const getWorkDates = () => {
    const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
    let enddate = null;
    if (props.workItemData.endDate !== '') {
      enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
    } else {
      enddate = 'Present';
    }

    return <span className='startdate'>{startdate} - {enddate}</span>
  }

  const getHighlights = props.workItemData.highlights.map(function (item, index) {
    return (<li key={index}>{item}</li>)
  });

  return (
    <div className="workItem">
      <h3 style={styles.h3}>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3>
      <div>
        <em>{getWorkDates()}</em>
      </div>
      <p>{props.workItemData.summary}</p>
      <ul>
        {getHighlights}
      </ul>
    </div>
  )
};

export default WorkItem;
