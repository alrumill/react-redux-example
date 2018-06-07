import React from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

// import Modal from 'react-bootstrap'

  const About = props => (
 <div>
     <h1>About Page</h1>
     <p>Did you get here via Redux?</p>
     <p>Count: {props.count}</p>
  </div>

);
const mapStateToProps = state => ({
  count: state.counter.count
});


  export default withRouter(connect(mapStateToProps)(About));


  
 