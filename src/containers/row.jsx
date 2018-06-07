import React, {Component} from 'react'; 
import {Button} from 'react-bootstrap'; 
import {withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import EditModal from './editmodal'
/*
*   A simple table row implemented as a react component
*/
export class MyRow extends Component {

    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this); 
        this.edit=this.edit.bind(this)
    }

    handleClick(){
        this.props.onClick(this.props.id); 
    }

    edit(){
    this.props.history.push({
        pathname: '/edit',
        state: {
            id: this.props.id,
            first: this.props.first,
            company: this.props.company,
            email: this.props.email
        }
    })
    
    }

    render(){
        return (
        <tr>
            <td> {this.props.id} </td> 
            <td> {this.props.first} </td>
            <td> {this.props.company} </td> 
            <td> {this.props.email} </td> 
            <td><Button bsStyle="danger" onClick={this.handleClick}>Delete</Button> &nbsp;
            <Button bsStyle="primary" onClick={this.edit}>Edit</Button> </td>
            {/* <td><EditModal/></td> */}
        </tr>);
        }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default withRouter(connect( mapDispatchToProps)(MyRow));