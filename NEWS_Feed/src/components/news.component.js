import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';  
import "react-table/react-table.css";

export default class News extends Component {

  constructor(props) {
      super(props);
      this.state = {
                          newsList: []
                   }
     }
    componentDidMount(){
      axios({
        url: 'https://api.qa.mrhe.gov.ae/mrhecloud/v1.4/api/public/v1/news',
        method: 'get',
        headers: {
            'consumer-key' : '',
            'consumer-secret': ''
        },
        params:{
          'local': 'en'
        }
    })
    .then(response => {      
        this.setState({ newsList: response.data.payload });
    }) 
    .catch(err => {
        console.log(err);
    });

    }    

    render() {
      const columns = [{  
       Header: 'Title',  
       accessor: 'title'  
       },{  
       Header: 'Description',  
       accessor: 'description'  
      },
      {  
       Header: 'Date',  
       accessor: 'date'  
      },
      {  
       Header: 'Image',  
       accessor: 'image',
       Cell: props => <a href={ props.value } target="_blank" download="news_image"><img style={{width: '40px', height: '40px'}} src={ props.value } /></a> // Custom cell components!  
       }
      ]
      return (
        <div>
          <h3 align="center">NEWS List</h3>
          {/*<table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>*/}
          <div>  
              <ReactTable  
                  data={this.state.newsList}  
                  columns={columns}  
                  defaultPageSize = {10}  
                  pageSizeOptions = {[10,20,30]}  
              />  
          </div>
        </div>
      );
    }
  }