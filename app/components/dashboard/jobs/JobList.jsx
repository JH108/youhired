import React, { createClass, PropTypes } from 'react';
import JobCard from './JobCard';
import AddJob from './AddJob';
import Filter from './Filter';
import ScrollArea from 'react-scrollbar';

const JobList = createClass({
  displayName: 'JobList',

  propTypes: {
    jobs: PropTypes.array.isRequired,
    changePage: PropTypes.func.isRequired,
    addJob: PropTypes.func.isRequired,
    selectJob: PropTypes.func.isRequired,
    activeComponent: PropTypes.string.isRequired,
    hideModal: PropTypes.func.isRequired
  },

  onAddJob(event) {
    this.props.displayJobForm({
      formType: 'DISPLAY_JOB_FORM',
      modalProps: {
        addJob: this.props.addJob,
        hideModal: this.props.hideModal,
        addJobDescription: this.props.addJobDescription
      }
    });
  },

  render() {
    const {
      selectJob,
      changePage,
      activeComponent,
      jobs,
      filterText,
      updateFilter,
      isFilterActive
    } = this.props;
    let filteredJobs = JSON.parse(JSON.stringify(jobs));
    if (isFilterActive) {
      filteredJobs = jobs.filter((job) => {
        if (job.details.companyname.indexOf(filterText) !== -1) {
          return true;
        }
        if (job.details.status.indexOf(filterText) !== -1) {
          return true;
        }
        if (job.details.createdat.indexOf(filterText) !== -1) {
          return true;
        }
        return false;
      });
    }

    let order = ['OFFER', 'INTERVIEW', 'INFO INTERVIEW', 'APPLIED', 'INTERESTED'];

    return (
      <div className='job-list'>
        <ScrollArea
          speed={0.8}
          className='job-list-scroll'
          horizontal={false}>
          {filteredJobs.sort((a, b) => {
              return order.indexOf(a.details.status) - order.indexOf(b.details.status);
            }).map((job, index) =>
            <JobCard
              key={index}
              activeComponent={activeComponent}
              changePage={changePage}
              selectJob={selectJob}
              jobDetails={job.details}
              jobActivities={job.activities}
              jobContacts={job.contacts}
            />
          )}
        </ScrollArea>

        <Filter
          filterText={filterText}
          updateFilter={updateFilter}
        />
        <button className='button job-list-button' onClick={this.onAddJob}>
          Add Job
        </button>
      </div>
    );
  }
});

export default JobList;
