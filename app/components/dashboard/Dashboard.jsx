import React, { createClass, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobList from './jobs/JobList';
import TaskList from './tasks/TaskList';
import { getUserData } from '../../api/users';
import { changePage } from '../../actions/NavigationActions';
import { addJob } from '../../api/users';
import AddJob from './jobs/AddJob';
import GoalApp from './goals/GoalApp'
import HeaderComponent from 'Header';
import FooterComponent from 'Footer';

const Dashboard = createClass({
  displayName: 'Dashboard',

  propTypes: {
    getData: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    addJob: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired
  },

  componentWillMount() {
    this.props.getData();
  },

  render() {
    const {
      addJob,
      changePage,
      activeComponent,
      jobs
    } = this.props;

    let currentComponent = null;

    if (activeComponent === 'AddJob') {
      console.log('jobinfo should render');
      currentComponent = <AddJob addJob={addJob} changePage={changePage} />;
    } else if (activeComponent === 'JobList') {
      console.log('dashboard should render');
      currentComponent = <JobList jobs={jobs} changePage={changePage} activeComponent={activeComponent} addJob={addJob}/>
    }

    return (

      <div className="root-view">
        <div>
          <HeaderComponent />
        </div>

          <div className="root-main">
            <div className="root-main-apps">
              <div className="job-app-header">
                <h4 className="job-app-text"> Current Job Applications </h4>
              </div>
              <div className="job-card">
                { currentComponent }
              </div>
            </div>

            <div className="root-main-goals">
              <div className="job-app-header">
                <h4 className="job-app-text"> Goals Monitoring </h4>
              </div>
              <div className="job-card">
                <GoalApp />
              </div>
            </div>

            <div className="root-main-tasks">
              <div className="job-app-header">
                <h4 className="job-app-text"> Current Task List </h4>
              </div>
              <div className="job-card">

              </div>
            </div>
          </div>

        <div>
          <FooterComponent />
        </div>

      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
      jobs: state.dashboard.jobs,
      companies: state.dashboard.companies,
      activity: state.dashboard.activity,
      applicationContacts: state.dashboard.applicationContacts,
      activeComponent: state.navigation.activeComponent
  };
};

const mapActionsToProps = {
  getData: getUserData,
  changePage: changePage,
  addJob: addJob
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
