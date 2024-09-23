import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Musica from './routes/Musica.jsx'

const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento Filho

    children:[
      {path:'/',element:<Home/>},
      {path:'/Musica',element:<Musica/>}
      ,
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
