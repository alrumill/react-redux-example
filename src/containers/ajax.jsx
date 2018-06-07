import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import { Grid, Row, Col, Clearfix, Table, Button } from 'react-bootstrap'
import MyRow from './row'
import '../index.css'
// import './App.css';

class Ajax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crsData: [],
      data: []
    }
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.setState
      ({
        crsData: $.parseJSON(
          $.ajax({
            url: 'http://localhost:3500/getData',
            async: false,
            dataType: 'json'
          }).responseText)
      });
  }

  methodFromParent(id) {
    this.props.history.push({
        pathname: '/edit',
        state: {
            data: id
        }
    })
}

  handleClick(id)   {
      axios.post('http://localhost:3500/deleteData', {
        id: id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    let newArray = this.state.crsData.slice();
    var i;
    for (i = 0; i < newArray.length; i++) {
        if(newArray[i].id == id){
            newArray.splice(i, 1);
        }
    }
    newArray.splice(id, 1);  
    this.setState({
      crsData : newArray
    })
}
 
  render() {

    return (<div>


            {/* users.map is like ngfor */}
            <Table  condensed>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <RenderTable/> */}
                {this.state.crsData.map(x=>
                 <MyRow key={x.id} id={x.id} first={x.first} company={x.company} email={x.email} onClick={this.handleClick}/>)}

              </tbody>
            </Table>
         
		                   </div>)
  }
}
  
export default Ajax;

// function RenderTable(props){
//   {this.state.crsData.map(function (props) {
//     return (<tr key={props.id}>
//       <td >{props.id}</td>
//       <td>{props.company}</td>
//       <td>{props.first}</td>
//       <td>{props.email}</td>
//       <td> <button onClick={(e) => this.deleteRow(e)}>Delete Row</button> </td>
//     </tr>)
//   })}
// }

