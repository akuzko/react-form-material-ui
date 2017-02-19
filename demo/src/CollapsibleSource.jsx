import React, { PropTypes, PureComponent } from 'react';
import Source from './Source';

export default class CollapsibleSource extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  };

  state = { open: false };

  render() {
    const { title, code } = this.props;

    return (
      <div>
        <div onClick={() => this.setState({ open: !this.state.open })}>{title}</div>
        {this.state.open &&
          <Source code={code} />
        }
      </div>
    );
  }
}
