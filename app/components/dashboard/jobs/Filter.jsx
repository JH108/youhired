import React, { createClass, PropTypes } from 'react';
// import { connect } from 'react-redux';

const Filter = createClass({
  displayName: 'Filter',

  propTypes: {
    applicationName: PropTypes.string.isRequired,
    applicationDate: PropTypes.string.isRequired,
    applicationStatus: PropTypes.string.isRequired
  },

  onFilter(event) {
    this.props.updateFilter({
      text: this.props.filterText + event.key,
      isFilterActive: true
    });
    console.log('filter text is ', this.props.filterText);
    console.log('this is the event key', event.key);
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
          placeholder={'Filter'}
          onKeyPress={this.onFilter}
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
