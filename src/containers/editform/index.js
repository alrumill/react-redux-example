import React from "react";
import {Button} from"react-bootstrap";

export default class Editform extends React.Component{

    constructor(props){
    super(props)
    
    console.log(this.props.location.state.data)

    this.state = {
        id: this.props.location.state.id,
        email:this.props.location.state.email,
        first:this.props.location.state.first,
        company:this.props.location.state.company
      }
    }

    // state={
    //     id:this.state.id,
    // };

    onSubmit=() =>{
        console.log(this.state);
        const httpRequest = new XMLHttpRequest();
        // const updateData = data => {
        //     this.setState({ rowData: data })
        // };
        //Send the proper header information along with the request
       
        httpRequest.open(
            "POST",
            "http://localhost:3500/updateData",
            true
        );
        httpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify(this.state));
    }

    render(){
        return(
            <form>

            <div className="container-fluid">
                 <div className="row"> 
                     <div className="col"></div>
                     <div className="col">
                     

            {/* <input placeholder={this.state.id} className="form-control" value={this.state.id} onChange={e=>this.setState({id:e.target.value})}/>
            <br/> */}
            <h3> {this.state.id} </h3>
            <input placeholder={this.state.email} className="form-control" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
            <br/>            
            <input placeholder={this.state.first} className="form-control" value={this.state.first} onChange={e=>this.setState({first:e.target.value})}/>
            <br/>            
            <input placeholder={this.state.company} className="form-control" value={this.state.company} onChange={e=>this.setState({company:e.target.value})}/>
                     <br/>
                     <Button onClick= {this.onSubmit}  bsStyle='success' >Save</Button>
                     &nbsp;
                      <Button onClick={()=> {this.props.history.replace('/ajax')}} bsStyle='danger'>Cancel</Button>
        
                              
                     </div>
                     <div className="col"></div>
            
                </div>
            </div> 
            </form>


        );
    }
}