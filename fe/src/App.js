import Body from './Components/Body';
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ResItem from './Components/ResItem';
import About from './Components/About';
import Cart from './Components/Cart';

const AppLayout = ()=>{
  return (
    <div>
       <div>
        <Header/>
       </div>
       <main>
        <Outlet/>
       </main>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/resItem/:resId',
        element:<ResItem/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])



function App() {
  return (
     <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
