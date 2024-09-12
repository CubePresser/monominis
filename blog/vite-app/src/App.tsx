import React from 'react';
import { PostProvider } from './context/PostContext';
import Dashboard from './views/Dashboard';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>SimpliBlog</h1>
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
