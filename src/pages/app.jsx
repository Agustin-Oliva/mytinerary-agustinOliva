import React from 'react'
import HomePage from "./HomePage/HomePage"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LayoutMain from './LayoutMain/LayoutMain'
import Cities from './CitiesPage/Cities'


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<LayoutMain/>,
            children:[
                {path:'/',
                 element:<HomePage/>
                },
                {
                    path:"/cities",
                    element:<Cities/>
                }
        
            ]
        }
    ])
  return (
    <>
        <RouterProvider router={router}/>
     
    </>
   
  )
}

export default App