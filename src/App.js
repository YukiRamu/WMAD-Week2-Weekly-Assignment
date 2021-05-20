import './App.css';
import React from 'react';
//import statement

class App extends React.Component {

  //fetch API

  //delete function

  //edit function
  //display none --> blockにするfunction

  //================ rendering =============
  render() {
    return (
      <>
        <header className="App-header">
          <h1>Weekly Assignment</h1>
        </header>
        {/* Photo.js : Child Component 1 */}
        <Photo />
        {/* Form.js : Child Component 2 */}
        <Form />
      </>
    );
  }

}

export default App;
