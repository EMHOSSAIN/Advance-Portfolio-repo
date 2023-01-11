import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Details from './Components/myDetails/Details';
import Main from './Layout/Main';
import Form from './Form/Form';



function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main> ,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/details',
          element: <Details></Details>
        },
        {
          path:'/form',
          element:<Form></Form>
        }
      ]
    }

  ])
  
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
