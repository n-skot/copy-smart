import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home'
//import Serdan from '../'
//import Jacarangas from '../'
import About from '../About'
import NotFound from '../NotFound'
import NavBar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const AppRoutes = () => {
  const router = useRoutes(
    [
      { path: '/', element: <Home /> },
      //{ path: '/serdan', element: },
      //{ path: '/jacarangas', element: },
      { path: '/about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ]
  )
  return router;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
