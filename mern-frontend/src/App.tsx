import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage';
import AdminConsolePage from '../pages/AdminConsolePage';
import AdminForgetPwdPage from '../pages/AdminForgetPwdPage';
import UserForgetPwdPage from '../pages/UserForgetPwdPage';
import ContactStaffPage from '../pages/ContactStaffPage';
import UserPage from '../pages/UserPage';
import { ROUTES } from '../utils/routes'
import WhatsappCodeComponent from './components/WhatsappCodeComponent';
function App() {

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />} />
        <Route path={ROUTES.ADMIN_PAGE} element={<AdminConsolePage />} />
        <Route path={ROUTES.ADMIN_FORGET_PWD} element={<AdminForgetPwdPage />} />
        <Route path={ROUTES.USER_PAGE} element={<UserPage />} />
        <Route path={ROUTES.USER_FORGET_PWD} element={<UserForgetPwdPage />} />
        <Route path={ROUTES.CONTACT_STAFF_PAFE} element={<ContactStaffPage />} />

        <Route path={ROUTES.ADMIN_PAGE_WHATSAPP_CODE_REQUEST} element={
          <WhatsappCodeComponent 
              breadcrumb_one={{
                setName: 'Admin Sign In',
                setNavigationLink: ROUTES.ADMIN_PAGE
              }}

              breadcrumb_two={{
                setName: 'Forget Password?',
                setNavigationLink: ROUTES.ADMIN_FORGET_PWD
              }}

              breadcrumb_three={{
                setName: 'WhatsApp Option',
                setNavigationLink: ''
              }}

              page={{
                backgroundImage: "background-one"
              }}
          /> 
        } />

        <Route path={ROUTES.USER_PAGE_WHATSAPP_CODE_REQUEST} element={
        <WhatsappCodeComponent 
            breadcrumb_one={{
              setName: 'User Sign In',
              setNavigationLink: ROUTES.USER_PAGE
            }}

            breadcrumb_two={{
              setName: 'Forget Password?',
              setNavigationLink: ROUTES.USER_FORGET_PWD
            }}

            breadcrumb_three={{
              setName: 'WhatsApp Option',
              setNavigationLink: ''
            }}

            page={{
              backgroundImage: "background-four"
            }}
        />
        }/>

        
      </Routes>
    </Router>
  )
}

export default App
