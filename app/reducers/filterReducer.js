import { UPDATE_FILTER } from '../actions/filters/FilterActionTypes';

const defaultState = {
  isFilterActive: false,
  filterText: ''
};

const filterReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state,
        isFilterActive: payload.isFilterActive,
        filterText: payload.filterText
      }
    default:
      return state;
  }
}

export default filterReducer;
