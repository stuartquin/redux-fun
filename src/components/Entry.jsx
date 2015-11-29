import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],

  getContent() {
    return this.props.content;
  },

  getUser() {
    return this.props.user;
  },

  getSharingText() {
    if (this.props.status === 'SHARING') {
      return 'Sharing...';
    }

    if (this.props.status === 'SHARED') {
      return 'Shared';
    }

    return 'Share';
  },

  render() {
    return <div className='entry'>

      <h3>User: {this.getUser()}</h3>
      {this.getContent()}
      <p>
        <a onClick={() => this.props.share(this.props.id)}>
          {this.getSharingText()}
        </a>
      </p>
    </div>;
  }
});
