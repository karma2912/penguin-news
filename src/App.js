import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Home from './components/Home';

export class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
      path:"/",
      element:<><Navbar/><News key="general " pageSize={6} country="in" category="general"/></>
      },
      {
      path:"/business",
      element: <><Navbar/><News key="business" pageSize={6} country="in" category="business"/></>
      },
      {
      path:"/sports",
      element: <><Navbar/><News key="sports" pageSize={6} country="in" category="sports"/></>
      },
      {
      path:"/entertainment",
      element: <><Navbar/><News key="entertainment" pageSize={6} country="in" category="entertainment"/></>
      },
      {
      path:"/health",
      element: <><Navbar/><News key="health" pageSize={6} country="in" category="health"/></>
      },
      {
      path:"/science",
      element: <><Navbar/><News key="science" pageSize={6} country="in" category="science"/></>
      },
      {
      path:"/technology",
      element: <><Navbar/><News key="technology" pageSize={6} country="in" category="technology"/></>
      },
    ])
    return (
      <div>
        
       <RouterProvider router={router}/>
      </div>
    )
  }
}

export default App
