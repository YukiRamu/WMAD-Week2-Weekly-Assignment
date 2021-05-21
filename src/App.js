import './App.css';
import React, { Component } from 'react';
import Form from "./component/Form/Form";
//import function

class App extends Component {
  state = {
    formDisplay: "block" //default none
  };

  //fetch API (Yuri)

  //delete method (Yuri)

  /* **************** Form.js control **************** */
  //edit method (Yuki)
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
    return (
      <>
        <header className="App-header">
          <h1>React Photo Gallery</h1>
        </header>
        {/* Photo.js */}

        {/* Form.js */}
        <Form
          formDisplay={this.state.formDisplay}
          saveChange={this.saveChange}
          closeForm={this.closeForm} />
      </>
    );
  }
}

export default App;


