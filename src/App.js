import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main/Main'
const App = () => {
  return (
    <Provider store={store}>
    <Navbar/>
    <div className='container'>
    <h1>Profile</h1>
    <div className='app_content'>
    <Main/>
    </div>
    </div>
    </Provider>
  )
}

export default App