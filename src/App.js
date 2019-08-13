import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({})
    selectedFile: event.target.files[0]
  }

  fileuploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('', fd)
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileuploadHandler}>Upload</button>
      </div>
    )
  }
}

export default App;
