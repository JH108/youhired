import React, { createClass, PropTypes } from 'react';
// import { connect } from 'react-redux';

const Filter = createClass({
  displayName: 'Filter',

  onFilter(event) {
    console.log('before updateFilter');
    console.log('filter text is ', this.props.filterText);
    console.log('this is the event key', event.key);
    if (event.key === 'Backspace') {
      this.props.updateFilter({
        filterText: this.props.filterText.slice(0, -1),
        isFilterActive: true
      });
    } else if (event.key.length === 1) {
      this.props.updateFilter({
        filterText: this.props.filterText + event.key,
        isFilterActive: true
      });
    }
  },

  render() {
    const {
      applicationStatus,
      applicationDate,
      applicationName
    } = this.props;
    return (
        <input
          className='filter-field'
          placeholder={'Search'}
          onKeyDown={this.onFilter}
        />
    );
  }
});

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapActionsToProps = {};

// export default connect(mapStateToProps, mapActionsToProps)(Filter);
export default Filter;
