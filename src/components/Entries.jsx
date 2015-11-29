import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import Entry from './Entry';

export const Entries = React.createClass({
  mixins: [PureRenderMixin],

  render() {
    return <div className='entries'>
      {this.props.entries.map((entry) => 
        <Entry {...entry.toObject()} share={this.props.shareEntry} />  
      )}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    entries: state.getIn(['user', 'entries'])
  };
}

export const EntriesContainer = connect(mapStateToProps, actionCreators)(Entries);
