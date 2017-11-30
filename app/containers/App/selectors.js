import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectFooter = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('footer').toJS()
);
const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);
const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);
export {
  selectGlobal,
  selectRoute,
  makeSelectFooter,
  makeSelectLoading,
  makeSelectError,
};
