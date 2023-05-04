import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
;
import Register from './Pages/Register/Register';
import SignIn from './Pages/SignIn/SignIn';
import AuthProvider from './AuthProvider/AuthProvider';
import Recipes from './Common/Recipes/Recipes';
import PrivateRoute from './routes/PrivateRoute';
import Error from './Pages/Error/Error';
import Contact from './Common/Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <SignIn></SignIn>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-site-oviislmabir.vercel.app/chefs/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
