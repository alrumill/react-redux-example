import React from "react";
import {Button} from "react-bootstrap";

export default class CreateNew extends React.Component{
   
        constructor(props) {
            super(props);
            
            this.routeWithData = this.routeWithData.bind(this);
        }

    state={
        id:'',
        email:'', 
        first:'',
        company:'' 
    };

    routeWithData() {
        // this.props.history.push({
        //     pathname: '/',
        //     state: {
        //         data: this.state
        //     }
        // })
    }

    onSubmit=() =>{
        const httpRequest = new XMLHttpRequest();
        // const updateData = data => {
        //     this.setState({ rowData: data })
        // };
        //Send the proper header information along with the request
       
        httpRequest.open(
            "POST",
            "http://localhost:3500/saveData",
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
                     

            {/* <input placeholder='id' className="form-control" value={this.state.id} onChange={e=>this.setState({id:e.target.value})}/>
            <br/> */}
            <input placeholder='email'className="form-control" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
            <br/>            
            <input placeholder='name'className="form-control" value={this.state.first} onChange={e=>this.setState({first:e.target.value})}/>
            <br/>            
            <input placeholder='company'className="form-control" value={this.state.company} onChange={e=>this.setState({company:e.target.value})}/>
                     <br/>
                     <Button onClick= {() => this.onSubmit()} bsStyle='success' >Save</Button> 
                     &nbsp;
                     <Button onClick={()=> {this.props.history.replace('/')}}bsStyle='danger'>Cancel</Button>
                              
                     </div>
                     <div className="col"></div>
            
                </div>
            </div> 
            </form>


        );
    }
}
