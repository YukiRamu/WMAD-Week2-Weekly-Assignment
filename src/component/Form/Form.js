import React, { Component } from 'react';
import "./Form.css";

export default class Form extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="formModal" style={{ "display": this.props.formDisplay }}>
          <form className="editForm" onSubmit={this.props.saveChange}>
            <h2>Edit title</h2>
            <button type="button" className="closeBtn" onClick={this.props.closeForm}>Close</button>
            <p className="oldTitle"><span>Old Title: </span> This is an old title</p>
            <label className="newTitle">New Title:
            <input type="text" className="titleInput" placeholder="Enter new title" />
            </label>
            <button type="submit" className="saveBtn">Save</button>
          </form>
        </div>
      </>
    );
  }
}
