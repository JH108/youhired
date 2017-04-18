import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addJob } from '../../../actions/dashboard/DashboardActions';
import { hideModal } from '../../../actions/modals/ModalActions';
// import Popup from 'react-popup';

const AddJob = createClass({
  displayName: 'AddJob',

  propTypes: {
    addJob: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  },

  cancelForm(event) {
    event.preventDefault();

    // ensure all fields were emptied when page changed
    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.statusInput.value = '';
    this.jobUrlInput.value = '';

    this.props.hideModal();
    // this.props.changePage({
    //   activeComponent: 'JobList'
    // });
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.addJob({
      companyname: this.companyNameInput.value,
      positionname:  this.jobPositionInput.value,
      jobposturl: this.jobUrlInput.value,
      status: this.statusInput.value
    });

    this.companyNameInput.value = '';
    this.jobPositionInput.value = '';
    this.statusInput.value = '';
    this.jobUrlInput.value = '';

    this.props.hideModal();
    // this.props.changePage({
    //   activeComponent: 'JobList'
    // });
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control'
          ref={nameInput => { this.companyNameInput = nameInput }}
          placeholder={'Company Name'}
        />
        <input
          className='form-control'
          ref={positionInput => { this.jobPositionInput = positionInput }}
          placeholder={'Position'}
        />
        <input
          className='form-control'
          ref={urlInput => { this.jobUrlInput = urlInput }}
          placeholder={'Job Post Url'}
        />
        <input
          className='form-control'
          ref={statusInput => { this.statusInput = statusInput }}
          placeholder={'Current Status'}
        />
        <button className='button' type='submit'>
          Submit
        </button>
        <button className='button' onClick={this.cancelForm}>
          Cancel
        </button>
      </form>
    );
  }
});

export default AddJob;
