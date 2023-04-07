import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../odontologos/pages/HomePage'
import { ContactPage } from '../auth/pages/ContactPage'
import { DetailsPage } from '../odontologos/pages/DetailsPage'
import { FavsPage } from '../odontologos/pages/FavsPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='/' element={ <Navigate to='/home' /> } />

            <Route path='home' element={ <HomePage/> } />
            <Route path='contact' element={ <ContactPage /> } />
            <Route path='favs' element={ <FavsPage/> } />
            <Route path='details' element={ <DetailsPage/> } />
        
        </Routes>
    </>
  )
}
