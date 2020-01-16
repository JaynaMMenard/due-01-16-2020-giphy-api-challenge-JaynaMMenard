import React from 'react';
import axios from 'axios';
import Zip from './Zip';
import { Card, CardText, Col, Input } from "reactstrap";

const BASE_URL = 'http://ctp-zip-api.herokuapp.com/city/';

class CitySearch extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      zipcodes: [],
      errorMessage: '',
      city: ''
    }
  }

  // useEffect(() => {
    
  // }

  handleSubmit =()=>{
    const url = BASE_URL + this.state.city.toUpperCase();
    const data = axios.get(url)
    .then(resp => {this.setState({zipcodes: resp.data})},
    (error)=> {this.setState({errorMessage: error.message})});
  }



  handleChange =(e)=>{
    this.setState({city: e.target.value })
  }

  render(){
    if(this.state.errorMessage) return <h1>{this.state.errorMessage}</h1>
    return (
      <Col>
         
      <div className="App">
        <Input  id="City" type="text" placeholder=" Enter City"   onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        <Card body>
        <CardText>
        <Zip zipcodes={this.state.zipcodes}/>
        </CardText>
        </Card>
      </div>
      
      </Col>
    );
  } 
}

export default CitySearch;
