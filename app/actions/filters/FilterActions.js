import { UPDATE_FILTER } from './FilterActionTypes';

export const updateFilter = ({ filterText, isFilterActive }) => {
  console.log(UPDATE_FILTER);
  return {
    type: UPDATE_FILTER,
    payload: {
      filterText,
      isFilterActive
    }
  };
};
