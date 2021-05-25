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
    newImgUrl: "", //add new form
    previewDisplay: "none", //add new form
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
            const photoData = data.filter(elem => elem.id <= 20);
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
  /****** sort by title ******/
  sortByTitle = (order) => {
    let sortedPhotos;
    if (order === "asc") {
      //alphabetical sort : ascending order
      sortedPhotos = this.state.photos.sort((a, b) =>
        a.title.split(' ')[0] < b.title.split(' ')[0] ? -1 : 1
      );
    } else {
      //alphabetical sort : descending order
      sortedPhotos = this.state.photos.sort((a, b) =>
        a.title.split(' ')[0] > b.title.split(' ')[0] ? -1 : 1
      );
    }

    //setState
    this.setState({
      photos: sortedPhotos
    });
  };

  /****** add new image form ******/
  addNewImage = () => {
    //show modal
    this.setState({
      editDisplay: "block",
    });
  };

  //show preview image
  showPreview = (e) => {
    //hide preview section when url input is empty
    e.target.value === "" ?
      this.setState({
        previewDisplay: "none"
      }) : this.setState({
        newImgUrl: e.target.value,
        previewDisplay: "flex"
      });
  };

  //close button clicked
  closeEditForm = () => {
    //hide modal
    this.setState({
      editDisplay: "none"
    });
  };

  //save new image
  saveNewImg = (e) => {
    e.preventDefault();
    //validation check
    if ((e.target[1].value === "") || (e.target[2].value === "")) {
      alert("Please enter both title and image url.");
    } else {
      //get the last index of the current image array
      let lastIndex = this.state.photos.length;
      //increment the id and add a new url and title
      //add the new image to the first position
      this.state.photos.splice(0, 0, {
        albumId: 1,
        id: lastIndex + 1,
        thumbnailUrl: e.target[2].value,
        title: e.target[1].value,
        url: e.target[2].value
      });

      //clear input
      e.target[1].value = "";
      e.target[2].value = "";
      this.setState({ newImgUrl: "" });

      //hide modal
      this.setState({
        editDisplay: "none",
        previewDisplay: "none"
      });
    }
  };

  /* **************** Form.js control (Yuki) **************** */
  //edit method : get id as a parameter from Photo.js
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

  //save change
  saveChange = (e) => {
    e.preventDefault();
    //validation check
    if (e.target[1].value === "") {
      alert("please enter a new title");
    } else {
      //find target object and assign new title
      let targetPhoto = this.state.photos.find(elem => elem.id == e.target[1].dataset.id); //id is string
      targetPhoto["title"] = e.target[1].value;

      //update state photo
      this.state.photos.splice(e.target[1].dataset.id - 1, 1, targetPhoto);

      //clear input
      e.target[1].value = "";

      //hide modal
      this.setState({
        formDisplay: "none"
      });
    }
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
          showPreview={this.showPreview}
          saveNewImg={this.saveNewImg}
          previewDisplay={this.state.previewDisplay}
          newImgUrl={this.state.newImgUrl}
          editDisplay={this.state.editDisplay} />

        {/* Photo.js : Child Component 1 : Yuri */}
        < Photo
          photos={photos}
          deletePhotos={this.deletePhotos}
          editTitle={this.editTitle} />;

        {/* Form.js : Child Component 2: Yuki */}
        <Form
          singlePhoto={this.state.singlePhoto}
          formDisplay={this.state.formDisplay}
          saveChange={this.saveChange}
          closeForm={this.closeForm} />

        <footer className="footer">
          <p>@Team Yuri H. & Yuki M. 2021 All right reserved.</p>
        </footer>
      </>
    );
  }
}

export default App;
