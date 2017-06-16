import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';
import { getUserData, getGoals } from '../../api/users';
import { changePage } from '../../actions/NavigationActions';
import { addJob, addGoal, addJobDescription, getProgressVersusAverage, getCurrentStatuses } from '../../api/users';
import AddJob from './jobs/AddJob';
import GoalApp from './goals/GoalApp';
import VisualData from './visualdata/VisualData';
import VisualDataTotal from './visualdata/VisualDataTotal';
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';
import { displayJobForm, displayGoalForm, hideModal } from '../../actions/modals/ModalActions';
import { selectJob } from '../../actions/dashboard/DashboardActions';
import { updateFilter } from '../../actions/filters/FilterActions';
import RootModal from '../RootModal';

const Dashboard = createClass({
  displayName: 'Dashboard',

  propTypes: {
    getData: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    addJob: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired,
    selectJob: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  },

  componentWillMount() {
    const history = this.props.history;
    if (!sessionStorage.getItem('auth')) {
      history.push('/login');
    }

    this.props.getProgressVersusAverage()
      .then(() => {
        return this.props.getCurrentStatuses();
      })
      .then(() => {
        return this.props.getGoals();
      })
      .then(() => {
        this.props.getData()
      });
  },

  render() {
    const {
      addJobDescription,
      addJob,
      changePage,
      activeComponent,
      jobs,
      goals,
      displayJobForm,
      displayGoalForm,
      hideModal,
      selectJob,
      currentStatuses,
      progressVsAverage,
      isModalActive,
      filterText,
      updateFilter,
      isFilterActive
    } = this.props;
    return (
      <div className="root-view">
        <div className={isModalActive ? "overlay" : ""} >
          <HeaderComponent />
        </div>
          { isModalActive ? (
            <div className="root-main overlay">
              <div className="add-job-modal">
                <RootModal />
              </div>
            </div>
            ) : null }
            <div className="root-main">

              <div className="root-main-apps">
                <div className="job-app-header">
                  <h4 className="job-app-text"> Current Job Applications </h4>
                </div>
                <div className="job-card">
                  <JobList
                    jobs={jobs}
                    addJobDescription={addJobDescription}
                    changePage={changePage}
                    activeComponent={activeComponent}
                    addJob={addJob}
                    displayJobForm={displayJobForm}
                    hideModal={hideModal}
                    selectJob={selectJob}
                    filterText={filterText}
                    isFilterActive={isFilterActive}
                    updateFilter={updateFilter}
                    />
                </div>
              </div>
              <div className="root-main-tasks">
                <div className="job-app-header">
                  <h4 className="job-app-text"> Data Visualization </h4>
                </div>
                <div className="visual-data-container">
                  <div className="ind-chart-cont">
                    <p className="status-chart-head">Current Goal Status</p>
                    <VisualData
                      currentStatuses={currentStatuses}
                      progressVsAverage={progressVsAverage}
                    />
                  </div>
                  <div className="ind-chart-cont-bottom">
                    <p className="status-chart-head">User Comparison Goal Status</p>
                    <VisualDataTotal
                      currentStatuses={currentStatuses}
                      progressVsAverage={progressVsAverage}
                    />
                  </div>
                </div>
              </div>

              <div className="root-main-goals">
                <div className="job-app-header">
                  <h4 className="job-app-text"> Goals Monitoring </h4>
                </div>
                <div className="job-card">
                  <GoalApp
                    addGoal={addGoal}
                    hideModal={hideModal}
                    displayGoalForm={displayGoalForm}
                    goals={goals} />
                </div>
              </div>

            </div>

        <div>
          <FooterComponent />
        </div>

      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
      jobs: state.dashboard.jobs,
      applicationContacts: state.dashboard.contacts,
      activeComponent: state.navigation.activeComponent,
      isAuthenticated: state.authentication.isAuthenticated,
      isModalActive: state.modal.modalType,
      goals: state.dashboard.goals.goalTracking,
      progressVsAverage: state.chart.progressVsAverage,
      currentStatuses: state.chart.currentStatuses,
      filterText: state.filter.filterText,
      isFilterActive: state.filter.isFilterActive
  };
};

const mapActionsToProps = {
  getData: getUserData,
  changePage: changePage,
  addJob: addJob,
  addGoal: addGoal,
  addJobDescription: addJobDescription,
  displayGoalForm: displayGoalForm,
  displayJobForm: displayJobForm,
  hideModal: hideModal,
  selectJob: selectJob,
  getGoals: getGoals,
  getProgressVersusAverage: getProgressVersusAverage,
  getCurrentStatuses: getCurrentStatuses,
  updateFilter: updateFilter
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
