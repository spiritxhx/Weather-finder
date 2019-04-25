import React from 'react';
import './App.css';
import {Title} from './components/Titile';
import Form from './components/Form';

class App extends React.Component {
  render(){
    return (
      <div>
        <Title />
        <Form />
      </div>
    );
  }
}

export default App;
