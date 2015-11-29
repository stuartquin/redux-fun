import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export const Friends = React.createClass({
  mixins: [PureRenderMixin],

  render() {
    return <ul>
      {this.props.friends.map((friend) =>
      <li onClick={() => this.props.followUser(friend)}>
        {friend.get('name')}
      </li>
      )}
      <hr />
      {this.props.following.map((user) =>
      <li onClick={() => this.props.removeUser(user)}>
        {user.get('name')}
      </li>
      )}
    </ul>;
  }
});

function mapStateToProps(state) {
  return {
    friends: state.getIn(['user', 'friends']),
    following: state.getIn(['user', 'following'])
  };
}

export const FriendsContainer = connect(mapStateToProps, actionCreators)(Friends);
