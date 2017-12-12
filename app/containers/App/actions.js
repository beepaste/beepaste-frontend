import {CLEAR_ERROR, ERROR, HIDE_LOADING,SHOW_LOADING} from './constants';

export function errorOccured(error) {
  return { type: ERROR, error };
}

export function errorEndShowing() {
  return { type: CLEAR_ERROR };
}
export function loadingFinished() {
  return { type: HIDE_LOADING };
}
