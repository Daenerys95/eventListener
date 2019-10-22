// import Action Types
import {
  CHANGE_HEART_ICON,
  OPEN_SHARE_LINKS_MODAL,
  CLOSE_SHARE_LINKS_MODAL,
} from './types';

// == Action Creators

// EventDetails : Header.js
export const changeHeartIcon = (src) => ({
  type: CHANGE_HEART_ICON,
  src,
});
export const openShareLinksModal = () => ({
  type: OPEN_SHARE_LINKS_MODAL,
});
export const closeShareLinksModal = () => ({
  type: CLOSE_SHARE_LINKS_MODAL,
});
