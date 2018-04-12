import React, { Component } from 'react';
import MainView from './components/MainView';
import Category from './components/Category';
import { getCategories, addPost } from './utils/Api';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  // const post = {
  //   id: 1,
  //   timestamp: Data.now(),
  //   title: "teste",
  //   body: "testeeeee",
  //   author: "numsei",
  //   category: 'react',
  //   voteScore: 0,
  //   deleted: false,
  //   commentCount: 0
  // }

  state = {
    categories: [],
    post : {
      id: 0,
      timestamp: Date.now(),
      title: "",
      body: "",
      author: "",
      category: "",
      voteScore: 0,
      deleted: false,
      commentCount: 0
    }
  }

  componentDidMount(){
    getCategories().then((res) =>{
        this.setState({categories:res})
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => (
            <MainView arr={this.state.categories} />
          )} />
          <Route path="/:category" render={(props) => (
            <Category {...props} />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
