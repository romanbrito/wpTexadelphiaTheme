import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Main/>
        </BrowserRouter>

        Nothing
      </div>


    );
  }
}

export default App;
