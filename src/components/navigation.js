import React from 'react';
import {
  Link
} from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    const pathname = window.location.pathname;
    return (
    <nav id='app-nav'>
      <Link 
        to='/'
        onClick={ () => this.forceUpdate() }
        className={ pathname === '/' ? 'active' : '' }
      >
      blog
      </Link>
      <Link 
        to='/photos'
        onClick={ () => this.forceUpdate() }
        className={ pathname === '/photos' ? 'active' : '' }
      >photos
      </Link>
      <Link 
        to='/doodles'
        onClick={ () => this.forceUpdate() }
        className={ pathname === '/doodles' ? 'active' : '' }
      >doodles
      </Link>
      <Link 
        to='/greetings'
        onClick={ () => this.forceUpdate() }
        className={ pathname === '/greetings' ? 'active' : '' }
      >greetings~
      </Link>
    </nav>
    );
  }
}