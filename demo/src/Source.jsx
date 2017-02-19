import React, { PropTypes, PureComponent } from 'react';
import dedent from 'dedent-js';

export default class Source extends PureComponent {
  static propTypes = {
    code: PropTypes.string.isRequired
  };

  componentDidMount() {
    Prism.highlightElement(this.refs.prism);
  }

  render() {
    return (
      <pre className="language-javascript" ref="prism">
        <code className="language-javascript">{dedent(this.props.code)}</code>
      </pre>
    );
  }
}
