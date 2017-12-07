import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('modal');

const makeSelectValue1 = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('value1')
);
const makeSelectValue2 = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('value2')
);
export {
  makeSelectValue1,
  makeSelectValue2,
};
