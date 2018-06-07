import React from 'react';
import { Route, Router, Link, withRouter  } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Editform from '../editform';
import '../../index.css'
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import { Grid, Row, Col, Clearfix, Table, Button } from 'react-bootstrap'
import { Bootstrap} from 'react-bootstrap'
import Ajax from '../ajax'
import CreateNew from '../createnew'

const App = props =>  (
  <div>

    <span className="App">
      <header className="App-header">
        <Link to="/">Home </Link>   &nbsp; &nbsp; &nbsp;
      <Link to="/about-us">About</Link>   &nbsp; &nbsp; &nbsp;
      <Link to="/ajax">Ajax</Link>   &nbsp; &nbsp; &nbsp;
      <Link to="/createnew">New</Link>   &nbsp; &nbsp; &nbsp;

      </header>


    </span>
    <br/>

   <Grid className="App">
        <Row className="show-grid">
            <Col md={10} mdOffset={0} lg={12} lgOffset={0}>
    <main>
 
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/edit" component={Editform} />
      <Route exact path="/ajax" component={Ajax} />
      <Route exact path="/createnew" component={CreateNew} />
    </main>


     </Col>
        </Row>
      </Grid>
  </div>
);


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default withRouter (connect(mapDispatchToProps)(App));