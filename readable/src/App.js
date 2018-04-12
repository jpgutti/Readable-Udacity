import React, { Component } from 'react';
import MainView from './components/MainView';
import Category from './components/Category';
import { getCategories } from './utils/Api';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount(){
    getCategories().then((res) =>{
        console.log(res);
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
          <Route path="/:category" render={() => (
            <Category/>
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
