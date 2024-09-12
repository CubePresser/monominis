import React from 'react';
import { PostProvider } from './context/PostContext';
import Dashboard from './views/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <hgroup>
          <FontAwesomeIcon id="sb-logo" icon={faCube} />
          <h1>SimpliBlog</h1>
        </hgroup>
        <menu>
          <li><button className="secondary">Sign Up</button></li>
          <li><button>Login</button></li>
        </menu>
      </header>
      <main>
        <PostProvider>
          <Dashboard />
        </PostProvider>
      </main>
    </div>
  )
}

export default App
