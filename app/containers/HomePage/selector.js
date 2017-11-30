import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('home');

const selectRoute = (state) => state.get('route');

const makeSelectForm = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('form').toJS()
);

const makeSelectApikey = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['form', 'apiKey'])
);

const makeSelectAuthor = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['form', 'author'])
);

const makeSelectPastTitle = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['form', 'pasteTitle'])
);

const makeSelectPasteLanguage = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['form', 'pasteLanguage'])
);

const makeSelectPasteExpire = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['form', 'pasteExpire'])
);

const makeSelectPasteRaw = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['form', 'pasteRaw'])
);

const makeSelectPasteEncryption = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['form', 'pasteEncryption'])
);


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectForm,
  makeSelectApikey,
  makeSelectAuthor,
  makeSelectPastTitle,
  makeSelectPasteLanguage,
  makeSelectPasteExpire,
  makeSelectPasteRaw,
  makeSelectPasteEncryption,
};
