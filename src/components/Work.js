import React from 'react';
import FontAwesome from 'react-fontawesome';
import WorkItem from './WorkItem';

const style = { 
  margin: 25
};

const Work = props => {
  const getWorkExperience = () => {
    const workItems = [];
    props.workData.forEach((val, index) => {
      workItems.push(<WorkItem key={index} workItemData={val} />);
    })
    return workItems;
  }

  return (
    <div style={style}>
      <h2 className="text-uppercase">
        <FontAwesome className='fa-user' name='building' size='2x' style={{ padding: 3 }} />
        Work experience
      </h2>
      {getWorkExperience()}
    </div>
  );
};

export default Work;
