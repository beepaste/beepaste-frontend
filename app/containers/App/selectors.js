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

const makeSelectApiKey = () => createSelector(
  selectGlobal,
  (state) => state.get('api_key')
);

const makeSelectPasteTitle = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'title'])
);
const makeSelectPasteEncryption = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'encryption'])
);
const makeSelectPasteRaw = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'raw'])
);
const makeSelectPasteEncyptedRaw = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'encryptedRaw'])
);
const makeSelectPasteShortUrl = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'shorturl'])
);
const makeSelectPasteSyntax = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'syntax'])
);
const makeSelectPasteAuthor = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'author'])
);
const makeSelectPasteUri = () => createSelector(
  selectGlobal,
  (state) => state.getIn(['paste', 'uri'])
);


export {
  selectGlobal,
  selectRoute,
  makeSelectFooter,
  makeSelectLoading,
  makeSelectError,
  makeSelectPasteTitle,
  makeSelectPasteEncryption,
  makeSelectPasteRaw,
  makeSelectPasteEncyptedRaw,
  makeSelectPasteShortUrl,
  makeSelectPasteSyntax,
  makeSelectPasteAuthor,
  makeSelectPasteUri,
  makeSelectApiKey,
};
