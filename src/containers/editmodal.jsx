
import Modal from 'react-bootstrap'
import React, {Component} from 'react'; 
import {Button} from 'react-bootstrap'; 

export class EditModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false,
        id:'',
        email:'', 
        first:'',
        company:'' 
      };
      
    }
    
  
    handleHide() {
      this.setState({ show: false });
    }
    
    onSubmit=() =>{
        console.log(this.state);
    }

    render() {
      return (
        <div className="modal-container" style={{ height: 200 }}>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
            Launch contained modal
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Contained Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
            <form>

<div className="container-fluid">
     <div className="row"> 
         <div className="col"></div>
         <div className="col">

<input placeholder='id' className="form-control" value={this.state.id} onChange={e=>this.setState({id:e.target.value})}/>
<br/>
<input placeholder='email'className="form-control" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
<br/>            
<input placeholder='name'className="form-control" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
<br/>            
<input placeholder='company'className="form-control" value={this.state.company} onChange={e=>this.setState({company:e.target.value})}/>
         <br/><br/><Button onClick={()=> {this.props.history.replace('/about-us')}}  bsStyle='success' >Save</Button> <Button onClick={()=> {this.props.history.replace('/about-us')}}bsStyle='danger'>Cancel</Button>
         <Button onClick= {() => this.onSubmit()}> consolelog </Button>
                  
         </div>
         <div className="col"></div>

    </div>
</div> 
</form>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

export default EditModal;