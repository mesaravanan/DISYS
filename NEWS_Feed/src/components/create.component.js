import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Create extends Component {
  constructor(props) {
    super(props);    

    this.state = {
      eid: '',
      name: '',
      idbarah_number:'',
      email: '',
      unified_number: '',
      mobile_number: ''
    }
  }
  onChangeEID = e => {
    this.setState({
      eid: e.target.value
    });
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    })  
  }
  onChangeIdbarahNumber = e => {
    this.setState({
      idbarah_number: e.target.value
    })
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  onChangeUnifiedNumber = e => {
     this.setState({
      unified_number: e.target.value
    })
  }

  onChangeMobileNumber = e => {
    this.setState({
      mobile_number: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    
    axios({
        url: 'https://api.qa.mrhe.gov.ae/mrhecloud/v1.4/api/iskan/v1/certificates/towhomitmayconcern?local=en',
        method: 'post',
        headers: {
            'consumer-key' : '',
            'consumer-secret': '',
            'Content-Type': 'application/json'
        },
        data:{
          eid: this.state.eid,
          name: this.state.name,
          idbarahNo: this.state.idbarah_number,      
          emailAddress: this.state.email,
          unifiedNumber: this.state.unified_number,
          mobileNo: this.state.mobile_number
        }
    })
    .then(res => {                
        console.log(res);
        if(res.data && res.data.message){
            alert(res.data.message);
        }
        this.props.history.push(`/news`);
    }) 
    .catch(err => {        
        console.log(err);
    });        
    
    this.setState({
      eid: '',
      name: '',
      idbarah_number: '',
      email: '',
      unified_number: '',
      mobile_number: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Certificate User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>EID:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.eid}
                      onChange={this.onChangeEID}
                      />
                </div>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Idbarah Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.idbarah_number}
                      onChange={this.onChangeIdbarahNumber}
                      />
                </div>
                <div className="form-group">
                    <label>EMAIL:  </label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Unified number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.unified_number}
                      onChange={this.onChangeUnifiedNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Mobile Number: </label>
                    <input type="tel"
                      pattern="^-?[0-9]\d*\.?\d*$"
                      className="form-control"
                      value={this.state.mobile_number}
                      onChange={this.onChangeMobileNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Certificate User" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}