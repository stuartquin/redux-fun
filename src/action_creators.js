import fetch from 'isomorphic-fetch';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function followUser(user) {
  return {
    type: 'FOLLOW_USER',
    user
  }
}

export function removeUser(user) {
  return {
    type: 'REMOVE_USER',
    user
  }
}

export function entrySharing(entry) {
  return {
    type: 'ENTRY_SHARING',
    entry
  }
}

export function entryShared(entry) {
  return {
    type: 'ENTRY_SHARED',
    entry
  }
}

export function shareEntry(entry) {
  return (dispatch) => {
    dispatch(entrySharing(entry));

    setTimeout(() => {
      dispatch(entryShared(entry));
    }, 1000);
  }
}
