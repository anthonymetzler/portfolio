import React from 'react';

import About from '../components/About';
import Sheet from '../components/Sheet';

export default class AboutSection extends React.Component {
  constructor(props) {
    super(props);
    const aboutData = props.aboutData;
  }
  render () {
    return (
      <div>
        <Sheet zDepth={1}>
          <About aboutData={this.props.aboutData} />
        </Sheet>
      </div>
    )
  }
}