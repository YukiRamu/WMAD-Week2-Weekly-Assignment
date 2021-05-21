import './App.css';
import React from 'react';
import Photo from "./Photo"; 

//import statement

class App extends React.Component {

  //fetch API
  state = {
    photos: []
  };  

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

  //delete function

  deletePhotos = id => {
    let currentPhotoList = this.state.photos; 
    let newPhotoList = currentPhotoList.filter (photo => photo.id !== id);
    this.setState ({
      photos:newPhotoList
    }); 
  }; 


  //edit function
  //display none --> blockにするfunction

  //================ rendering =============
  render() {
    const {photos} = this.state; 
    return (
      <>
        <header className="App-header">
          <h1>Weekly Assignment</h1>
        </header>
        {/* Photo.js : Child Component 1 */}
        <Photo photos = {photos} deletePhotos = {this.deletePhotos}/>; 
        {/* Form.js : Child Component 2 */}

      </>
    );
  }

}

export default App;
