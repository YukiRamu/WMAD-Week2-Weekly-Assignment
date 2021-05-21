import './App.css';
import React, { Component } from 'react';
import Photo from "./Photo"; 
import Form from "./component/Form/Form";

class App extends Component {
  //fetch API (Yuri)
  state = {
    photos: []
    formDisplay: "block" //default none
  };  
  
 //fetch API (Yuri)
  componentDidMount () {
    fetch ("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
      if (res.status !== 200){
        console.log (`This is a error ${res.status}`); 
      }
      res.json()
      .then(data => {
        this.setState({
          photos:data
        }); 
      }); 
    }); 
  }
  
  /* **************** Photo.js control (Yuri)　**************** */
  //delete method (Yuri)
  
  

  /* **************** Form.js control (Yuki)　**************** */
  //edit method
  editTitle = () => {
    //show modal
    this.setState({
      formDisplay: "block"
    });
  };

  //close button clicked
  closeForm = () => {
    //hide modal
    this.setState({
      formDisplay: "none"
    });
  };

  //save change method
  saveChange = (e) => {
    console.log("save clicked");
    e.preventDefault();
    //hide modal
    this.setState({
      formDisplay: "none"
    });
  };

  render() {
    const {photos} = this.state; 
    return (
      <>
        <header className="App-header">
          <h1>React Photo Gallery</h1>
        </header>
        {/* Photo.js : Child Component 1: Yuri */}
        < Photo photos = {photos} deletePhotos = {this.deletePhotos}/>; 
        {/* Form.js : Child Component 2: Yuki */}
        <Form
          formDisplay={this.state.formDisplay}
          saveChange={this.saveChange}
          closeForm={this.closeForm} />
      </>
    );
  }
}

export default App;