import { createSelector } from 'reselect';

/**
 * Direct selector to the viewPastePage state domain
 */
const selectViewPastePageDomain = (state) => state.get('viewPastePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ViewPastePage
 */

const makeSelectViewPastePage = () => createSelector(
  selectViewPastePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectViewPastePage;
export {
  selectViewPastePageDomain,
};
