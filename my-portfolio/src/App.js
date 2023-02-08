import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import HomePage from './Components/Home';
import ProjectsPage from './Components/Projects';
import RootLayout from './Components/Roots';
const router = createBrowserRouter([
  {
    path:'/', 
    element: <RootLayout/>,
    children: [
      {path: '/', element: <HomePage/>}, 
      {path: '/ProjectsPage', element: <ProjectsPage/>}
    ]
  }
])
function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
