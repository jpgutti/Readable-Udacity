import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import MainView from './components/MainView';
import Category from './components/Category';
import { fetchAllPosts } from './actions/posts';
import { getCategories, createPost, getPost, getAllPosts} from './utils/Api';
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
  }

  componentDidMount(){
    fetchAllPosts();
    getCategories().then((res) =>{
        this.setState({categories:res})
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => (
            <MainView arr={this.state.categories}/>
          )} />
          <Route path="/:category" render={(props) => (
            <Category {...props} />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(store, action){

}
function mapDispatchToProps(dispatch) {
  return {
      
  }
}

export default connect()(App);
