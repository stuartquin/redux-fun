import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function followUser(state, user) {
  const following = state.getIn(['user', 'following']);
  return state.setIn(['user', 'following'], following.add(user));
}

function removeUser(state, user) {
  const following = state.getIn(['user', 'following']);
  return state.setIn(['user', 'following'], following.delete(user));
}

function setEntryStatus(state, id, status) {
  const entries = state.getIn(['user', 'entries']);
  const index = entries.findIndex((entry) => entry.get('id') === id);
  return state.setIn(['user', 'entries'], entries.update(index, (entry) => {
    return entry.set('status', status);
  }));
}

export default function(state = Map(), action) {
  switch(action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'FOLLOW_USER':
      return followUser(state, action.user);
    case 'REMOVE_USER':
      return removeUser(state, action.user);
    case 'ENTRY_SHARED':
      return setEntryStatus(state, action.entry, 'SHARED');
    case 'ENTRY_SHARING':
      return setEntryStatus(state, action.entry, 'SHARING');
  }

  return state;
}
