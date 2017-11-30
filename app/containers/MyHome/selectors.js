import { createSelector } from 'reselect';

/**
 * Direct selector to the myHome state domain
 */
const selectMyHomeDomain = (state) => state.get('myHome');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyHome
 */

const makeSelectMyHome = () => createSelector(
  selectMyHomeDomain,
  (substate) => substate.toJS()
);

export default makeSelectMyHome;
export {
  selectMyHomeDomain,
};
