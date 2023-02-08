import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import HomePage from './Components/Home';
import ProjectsPage from './Components/Projects';
import ResumePage from './Components/Resume';
import RootLayout from './Components/Roots';
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
