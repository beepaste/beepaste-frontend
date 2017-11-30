import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectFooterYear = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['footer', 'year'])
);


export {
  selectGlobal,
  makeSelectFooterYear,
};
