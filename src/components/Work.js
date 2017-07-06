import React from 'react';
import FontAwesome from 'react-fontawesome';
import WorkItem from './WorkItem';

const styles = {
  main: {
    padding: '20px',
    textAlign: 'justify'
  },
  inlineIcon : {
    paddingRight: '10px',
    color: '#c50e29'
  },
  h2: {
    marginBottom: '5px'
  }
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
    <div style={styles.main}>
      <h2 style={styles.h2}>
        <FontAwesome className='fa-user' name='building' size='lg' style={styles.inlineIcon} />
        Work experience
      </h2>
      {getWorkExperience()}
    </div>
  );
};

export default Work;
