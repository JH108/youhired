import { UPDATE_FILTER } from './FilterActionTypes';

export const updateFilter = ({ filterText, isFilterActive }) => {
  return {
    type: UPDATE_FILTER,
    payload: {
      filterText,
      isFilterActive
    }
  };
};
