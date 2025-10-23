import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage';
import AdminConsolePage from '../pages/AdminConsolePage';
import AdminForgetPwdPage from '../pages/AdminForgetPwdPage';
import UserForgetPwdPage from '../pages/UserForgetPwdPage';
import ContactStaffPage from '../pages/ContactStaffPage';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import UserDashboardPage from '../pages/UserDashboardPage';
import UserPage from '../pages/UserPage';
import { ROUTES } from '../utils/routes'
import WhatsappCodeComponent from './components/WhatsappCodeComponent';
import PasswordChangeComponent from './components/PasswordResetOptionComponent';
import { BACKGROUNDS } from '../utils/backgrounds'

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
        <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboardPage />}/>
        <Route path={ROUTES.USER_DASHBOARD} element={<UserDashboardPage />}/>

        <Route path={ROUTES.ADMIN_PAGE_WHATSAPP_CODE_REQUEST} element={
          <WhatsappCodeComponent 
              page={{ backgroundImage: BACKGROUNDS.class.ADMIN_BACKGROUND}}
              tab={{ title: "Admin | WhatsApp Code"}}
              options={{ changeOptions: ROUTES.ADMIN_FORGET_PWD}}
              isAdmin={true}
          /> 
        } />
        
        <Route path={ROUTES.USER_PAGE_WHATSAPP_CODE_REQUEST} element={
          <WhatsappCodeComponent 
              page={{ backgroundImage: BACKGROUNDS.class.USER_BACKGROUND }}
              tab={{ title: "User | WhatsApp Code"}}
              options={{ changeOptions: ROUTES.USER_FORGET_PWD}}
              isAdmin={false}
          />
        }/>
        <Route path={ROUTES.ADMIN_PAGE_PASSWORD_RESET_REQUEST} element={
          <PasswordChangeComponent 
              page={{ backgroundImage: BACKGROUNDS.class.ADMIN_BACKGROUND}}
              tab={{ title: "Admin | Password Reset"}}
              options={{ changeOptions: ROUTES.ADMIN_FORGET_PWD}}
              isAdmin={true} />
        }/>
        <Route path={ROUTES.USER_PAGE_PASSWORD_RESET_REQUEST} element={
          <PasswordChangeComponent 
              page={{ backgroundImage: BACKGROUNDS.class.USER_BACKGROUND}}
              tab={{ title: "User | Password Reset"}}
              options={{ changeOptions: ROUTES.USER_FORGET_PWD}}
              isAdmin={false} />
        }/>

        
      </Routes>
    </Router>
  )
}

export default App
