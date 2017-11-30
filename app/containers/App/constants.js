/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const POST_NEW_PASTE = 'POST_NEW_PASTE';
export const POST_NEW_PASTE_SUCCESS = 'POST_NEW_PASTE_SUCCESS';
export const POST_NEW_PASTE_ERROR = 'POST_NEW_PASTE_ERROR';
export const REQUEST_PASTE_NEW = 'REQUEST_PASTE_NEW';
export const CHANGE_AUTHOR = 'CHANGE_AUTHOR';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_PASTE_LANGUAGE = 'CHANGE_PASTE_LANGUAGE';
export const CHANGE_PASTE_EXPIRE = 'CHANGE_PASTE_EXPIRE';
export const CHANGE_RAW_CODE = 'CHANGE_RAW_CODE';
export const CHANGE_ENCRYPTION = 'CHANGE_ENCRYPTION';
