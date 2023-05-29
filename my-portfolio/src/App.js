import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import HomePage from './Components/HomePage/Home';
import ProjectsPage from './Components/Projects/Projects';
import ResumePage from './Components/Resume';
import RootLayout from './Components/Roots';
import './App.css'
const router = createBrowserRouter([
  {
    path:'/', 
    element: <RootLayout/>,
    children: [
      {path: '/', element: <HomePage/>}, 
      {path: '/ProjectsPage', element: <ProjectsPage/>},
      {path: '/ResumePage', element: <ResumePage/>}
    ]
  }
])
function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
