import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes , Route } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Home from './components/Home';

export class App extends Component {
  render() {

    return (
      <div>
  <Routes>
      <Route path="/penguin-news" element={ <><Navbar/><News key="general " pageSize={6} country="in" category="general"/></>}/>
      <Route path="/" element={ <><Navbar/><News key="general " pageSize={6} country="in" category="general"/></>}/>
      <Route path="/business" element={ <><Navbar/><News key="business " pageSize={6} country="in" category="business"/></>}/>
      <Route path="/health" element={ <><Navbar/><News key="health " pageSize={6} country="in" category="health"/></>}/>
      <Route path="/technology" element={ <><Navbar/><News key="technology " pageSize={6} country="in" category="technology"/></>}/>
      <Route path="/entertainment" element={ <><Navbar/><News key="entertainment " pageSize={6} country="in" category="entertainment"/></>}/>
      <Route path="/sports" element={ <><Navbar/><News key="sports " pageSize={6} country="in" category="sports"/></>}/>
      <Route path="/science" element={ <><Navbar/><News key="science " pageSize={6} country="in" category="science"/></>}/>
 </Routes>
      </div>
    )
  }
}

export default App
