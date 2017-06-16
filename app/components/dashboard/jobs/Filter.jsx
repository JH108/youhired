import React, { createClass, PropTypes } from 'react';
// import { connect } from 'react-redux';

const Filter = createClass({
  displayName: 'Filter',

  onFilter(event) {
    console.log('before updateFilter');
    console.log('filter text is ', this.props.filterText);
    console.log('this is the event key', event.key);
    this.props.updateFilter({
      filterText: this.props.filterText + event.key,
      isFilterActive: true
    });
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
