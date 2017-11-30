import { createSelector } from 'reselect';

/**
 * Direct selector to the aboutusPage state domain
 */
const selectAboutusPageDomain = (state) => state.get('aboutusPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AboutusPage
 */

const makeSelectAboutusPage = () => createSelector(
  selectAboutusPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectAboutusPage;
export {
  selectAboutusPageDomain,
};
