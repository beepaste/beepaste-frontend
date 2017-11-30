import { createSelector } from 'reselect';

/**
 * Direct selector to the documentPage state domain
 */
const selectDocumentPageDomain = (state) => state.get('documentPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DocumentPage
 */

const makeSelectDocumentPage = () => createSelector(
  selectDocumentPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectDocumentPage;
export {
  selectDocumentPageDomain,
};
