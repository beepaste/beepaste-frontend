import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('modal');

const makeSelectValue = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('value')
);

export {
  makeSelectValue,
};
