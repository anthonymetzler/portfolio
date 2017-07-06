import React from 'react';

import Sheet from '../components/Sheet';
import Skills from '../components/Skills';

export default class SkillsSection extends React.Component {
  constructor(props) {
    super(props);
    const skillsData = props.skillsData;
  }
  render () {
    return (
      <div>
        <Sheet zDepth={1}>
          <Skills skillsData={this.props.skillsData} />
        </Sheet>
      </div>
      )
    }
  }
