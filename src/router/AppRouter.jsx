import { Navigate, Route, Routes } from 'react-router-dom'
import { ContactPage } from '../auth/pages/ContactPage'
import { HomePage, DetailsPage, FavsPage } from '../odontologos'
import { Footer, Navbar } from '../ui'


export const AppRouter = () => {


  return (
    <>
 
        <Navbar/>

        <Routes>

            <Route path='/' element={ <Navigate to='/home' /> } />

            <Route path='home' element={ <HomePage/> } />
            <Route path='contact' element={ <ContactPage /> } />
            <Route path='favs' element={ <FavsPage/> } />
            <Route path='details/:id' element={ <DetailsPage/> } />
        
        </Routes>

        {/* <Footer/> */}
    </>
  )
}
