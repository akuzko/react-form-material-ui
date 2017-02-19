import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Form from 'react-form-base';

export default class DialogForm extends Form {
  static propTypes = {
    ...Form.propTypes,
    open: PropTypes.bool,
    title: PropTypes.string,
    saveLabel: PropTypes.string,
    closeLabel: PropTypes.string,
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    ...Form.defaultProps,
    title: '',
    saveLabel: 'Save',
    closeLabel: 'Cancel',
    open: false
  };

  getTitle() {
    return this.props.title;
  }

  getActions() {
    const { actions, saveLabel, closeLabel, onRequestClose } = this.props;

    return actions || [
      <FlatButton label={closeLabel} onTouchTap={onRequestClose} />,
      <FlatButton label={saveLabel} primary onTouchTap={() => this.save()} />
    ];
  }

  save() {
    return this.ifValid(() => super.save());
  }

  render() {
    return (
      <Dialog
        {...this.props}
        title={this.getTitle()}
        actions={this.getActions()}
      >
        {super.render()}
      </Dialog>
    );
  }
}
