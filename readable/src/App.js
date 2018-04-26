import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import MainView from './components/MainView';
import Category from './components/Category';
import NewPost from './components/NewPost';
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

  componentWillMount(){
    
    
  }

  componentDidMount(){
    this.props.dispatch(fetchAllPosts());
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
          <Route exact path="/:category" render={(props) => (
            <Category {...props} />
          )} />
          <Route path="/:category/add" render={(props) => (
            <NewPost {...props}/>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

// function mapStateToProps(store, action){

// }
// function mapDispatchToProps(dispatch) {
//   return {populateStore: () => dispatch(fetchAllPosts())}
// }

export default connect()(App);
