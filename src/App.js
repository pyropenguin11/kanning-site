import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/blog',
      element: <Blog/>,
    },
    {
      path: '/resume',
      element: <Resume/>,
    },
    {
      path: '/contact',
      element: <Contact/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
