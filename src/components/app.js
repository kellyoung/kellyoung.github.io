import React from 'react';
import '../css/app.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navigation from './navigation';
import BlogContainer from './blog-container';
import DoodleContainer from './doodle-container';
import PhotoContainer from './photo-container';
import GreetingContainer from './greeting-container';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div id='app'>
          <header id='header'>@kellyoung</header>
        </div>
        <Navigation/>
        <Route exact path='/' render={() => (
          <BlogContainer/>
        )} />
        <Route exact path='/photos' render={() => (
          <PhotoContainer/>
        )} />
        <Route exact path='/doodles' render={() => (
          <DoodleContainer/>
        )} />
        <Route exact path='/greetings' render={() => (
          <GreetingContainer/>
        )} />
      </Router>
    );
  }
}