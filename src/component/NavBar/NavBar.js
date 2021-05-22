import React, { Component } from 'react';
import "./NavBar.css";

export class NavBar extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/* Navigation button */}
        <nav className="navBar">
          <button type="button" className="sortTitleBtn" onClick={() => { this.props.sortByTitle("asc"); }}>Sort by title ASC</button>
          <button type="button" className="sortTitleBtn" onClick={() => {
            this.props.sortByTitle("desc");
          }}>Sort by title DESC</button>
          <button type="button" className="addNewBtn" onClick={this.props.addNewImage}>Add new image</button>
        </nav>

        {/* Form for adding a new image */}
        <div className="addNewModal" style={{ "display": this.props.editDisplay }}>
          <form className="addNewForm" onSubmit={this.props.saveNewImg}>
            <h2>Add new image</h2>

            <button type="button" className="closeBtn" onClick={this.props.closeEditForm}>Close</button>

            <label className="title">Title:
            <input type="text" className="titleInput" placeholder="Enter your title" />
            </label>

            <label className="imgUrl">Image URL:
            <input type="text" className="urlInput" placeholder="Enter image URL" onChange={this.props.showPreview} />
            </label>

            <p className="preview" style={{ "display": this.props.previewDisplay }}>Preview Image :
            <img src={this.props.newImgUrl} alt="preview" className="previewImg"></img>
            </p>

            <button type="submit" className="addNewBtn">Add New</button>
          </form>
        </div>
      </>
    );
  }
}

export default NavBar;
