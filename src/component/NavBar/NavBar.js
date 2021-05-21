import React, { Component } from 'react';
import "./NavBar.css";

export class NavBar extends Component {
  render() {
    return (
      <>
        {/* Navigation button */}
        <nav className="navBar">
          <button type="button" className="sortTitleBtn" onClick={this.props.sortByTitle}>Sort by title</button>
          <button type="button" className="addNewBtn" onClick={this.props.addNewImage}>Add new image</button>
        </nav>

        {/* Form for adding a new image */}
        <div className="addNewModal" style={{ "display": this.props.editDisplay }}>
          <form className="addNewForm">
            <h2>Add new image</h2>

            <button type="button" className="closeBtn" onClick={this.props.closeEditForm}>Close</button>

            <label className="title">Title:
            <input type="text" className="titleInput" placeholder="Enter your title" />
            </label>
            
            <button type="submit" className="addNewBtn">Add New</button>
          </form>
        </div>
      </>
    );
  }
}

export default NavBar;
