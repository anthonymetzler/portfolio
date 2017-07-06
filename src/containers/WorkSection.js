import React from 'react';

import Sheet from '../components/Sheet';
import Work from '../components/Work';

export default class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    const workData = props.workData;
  }
  render () {
    return (
      <div>
        <Sheet zDepth={1}>
          <Work workData={this.props.workData} />
        </Sheet>
      </div>
      )
    }
  }
