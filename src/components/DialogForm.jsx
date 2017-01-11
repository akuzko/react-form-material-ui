import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Form from 'react-form-base';

export default class DialogForm extends Form {
  static propTypes = {
    ...Form.propTypes,
    open: PropTypes.bool,
    saveLabel: PropTypes.string,
    closeLabel: PropTypes.string,
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    saveLabel: 'Save',
    closeLabel: 'Cancel'
  };

  getTitle() {
    return '';
  }

  getActions() {
    const { saveLabel, closeLabel, onRequestClose } = this.props;

    return [
      <FlatButton label={closeLabel} onTouchTap={onRequestClose} />,
      <FlatButton label={saveLabel} primary onTouchTap={() => this.save()} />
    ];
  }

  render(content) {
    return (
      <Dialog
        title={this.getTitle()}
        actions={this.getActions()}
        open={this.props.open}
      >
        {content}
      </Dialog>
    );
  }
}
