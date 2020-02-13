import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const url = 'http://expressapp-env.admxwvj5jn.us-east-1.elasticbeanstalk.com/';

function App() {
  const[data, setData] = useState(''); 
  const getText = () => {
    axios.get(url).then(response => response.data)
    .then((data) => {
      // setData(data);
      setData(data[0].title);
     })
  }
  return (
    <div className="App">
      <header>
        {data}
      </header>
      <button onClick={() => getText()}>Hello world</button>
    </div>
  );
}

export default App;
