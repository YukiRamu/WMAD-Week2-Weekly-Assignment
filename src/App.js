//import './App.css';
import React, { Component } from 'react';
import "./App.css";
import Photo from "./component/Photo/Photo";
import Form from "./component/Form/Form";
import NavBar from "./component/NavBar/NavBar";

class App extends Component {
  //fetch API (Yuri)
  state = {
    photos: [],
    formDisplay: "none", //edit form
    editDisplay: "none", //add new form
    singlePhoto: {} //for form
  };

  //fetch API (Yuri)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        if (res.status !== 200) {
          console.log(`This is a error ${res.status}`);
        }
        res.json()
          .then(data => {
            const photoData = data.filter(elem => elem.id < 20);
            this.setState({
              photos: photoData
            });
          });
      });
  }

  /* **************** Photo.js control (Yuri) **************** */
  //delete method (Yuri)

  deletePhotos = id => {
    let currentPhotoList = this.state.photos;
    let newPhotoList = currentPhotoList.filter(photo => photo.id !== id);
    this.setState({
      photos: newPhotoList
    });
  };

  /* **************** NavBar.js control (Yuki) **************** */
  /** sort by title **/
  sortByTitle = () => {
    //alphabetical sort : ascending order
    let sortedPhotos = this.state.photos.sort((a, b) =>
      a.title.split(' ')[0] < b.title.split(' ')[0] ? -1 : 1
    );
    //setState
    this.setState({
      photos: sortedPhotos
    });
  };

  /**  add new image form **/
  addNewImage = () => {
    console.log("add new clicked");
    //show modal
    this.setState({
      editDisplay: "block"
    });
  };

  //close button clicked
  closeEditForm = () => {
    //hide modal
    this.setState({
      editDisplay: "none"
    });
  };

  /* **************** Form.js control (Yuki) **************** */
  //edit method : will get id as a parameter from Photo.js
  editTitle = (id) => {
    //find the element that matches id parameter
    let targetPhoto = this.state.photos.find(elem => elem.id === id); //object

    this.setState({
      singlePhoto: {
        id: id,
        title: targetPhoto.title
      }
    });

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
    e.preventDefault();

    //find target object and assign new title
    let targetPhoto = this.state.photos.find(elem => elem.id == e.target[1].dataset.id); //id is string
    targetPhoto["title"] = e.target[1].value;

    //update state photo
    this.state.photos.splice(e.target[1].dataset.id - 1, 1, targetPhoto);

    //hide modal
    this.setState({
      formDisplay: "none"
    });
  };

  render() {

    const { photos } = this.state;

    return (
      <>
        <header className="App-header">
          <h1>React Photo Gallery</h1>
        </header>

        {/* NavBar.js : Child Component 3: Yuki */}
        <NavBar
          sortByTitle={this.sortByTitle}
          addNewImage={this.addNewImage}
          closeEditForm={this.closeEditForm}
          editDisplay={this.state.editDisplay} />

        {/* Photo.js : Child Component 1 : Yuri */}
        < Photo photos={photos} deletePhotos={this.deletePhotos} editTitle={this.editTitle} />;


        {/* Form.js : Child Component 2: Yuki */}
        <Form
          singlePhoto={this.state.singlePhoto}
          formDisplay={this.state.formDisplay}
          saveChange={this.saveChange}
          closeForm={this.closeForm} />
      </>
    );
  }
}

export default App;


// Testing Purpose
// let filteredData = data.filter(elem => elem.id <= 20);
// console.log(filteredData);
// <button onClick={() => { this.editTitle(4); }}>Yuki Form Test Button</button>