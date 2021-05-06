import "./App.css";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Component } from "react";
import axios from "axios";





  class App extends Component{

    state = {
      data:""
    }

    componentDidMount = () => {
      axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=180001&date=10-05-2021")
      .then((res)=>{
        this.setState({
          data:JSON.stringify(res)
        })
      })
      
    }
    render(){
console.log(this.state.data)
      return (
        <Fragment>
          <p>{this.state.data}</p>
        </Fragment>
            
    
    ); 
    }
  }


const mapStateToProps = (state) => {
  return {
    reduxData : state
  };
}

export default connect(mapStateToProps , null)(App);

    