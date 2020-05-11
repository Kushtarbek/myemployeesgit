import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./Components/Search.jsx"
import List from "./Components/List.jsx"
                  


class App extends React.Component {
  constructor(){
    super();
    this.state= {
      employees:[],
      word:""
    };
  }

  getAPIdata = () => {
    fetch("https://raw.githubusercontent.com/maratgaip/json/master/people.json")
    .then((response) => {
      return response.json()
    })
    .then((listofpeople)=>{ 
      this.setState({employees:listofpeople})  
    })
  } 
  
  componentDidMount(){
    this.getAPIdata();
  }

  getSearch = (event) => {
    this.setState({word:event.target.value})
    console.log("word", this.state.word)
  }

  render(){
  return (
    <div className="container">
    <Search getSearch={this.getSearch} value={this.state.word}/>
    <List employees={this.state.employees}/>
    </div>
  );
}
}

export default App;
