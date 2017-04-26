import React, { createClass, PropTypes } from 'react';
// import { connect } from 'react-redux';

const Filter = createClass({
  displayName: 'Filter',

  propTypes: {
    applicationName: PropTypes.string.isRequired,
    applicationDate: PropTypes.string.isRequired,
    applicationStatus: PropTypes.string.isRequired
  },

  render() {
    const {
      applicationStatus,
      applicationDate,
      applicationName
    } = this.props;
    return (
      <div>
        <input
          className='filter-field'
          ref={filterText => {
            this.filterText = filterText
          }}
          placeholder={'Filter'}
          onKeyUp={this.onFilter}
        />
      </div>
    );
  }
});

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapActionsToProps = {};

// export default connect(mapStateToProps, mapActionsToProps)(Filter);
export default Filter;
