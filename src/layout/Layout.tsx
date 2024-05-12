import { Routes, Route } from 'react-router-dom';
import EmployeeReg from '../componenets/Employee';
import MainPage from '../componenets/Main';
import EmployerReg from '../componenets/Employer';
import ContactUs from '../componenets/ContactUs';
import Cookies from '../componenets/Cookies';
import TermsAndConditions from '../componenets/TermsAndConditions';
import DataProtection from '../componenets/DataProtection';
import Impressum from '../componenets/Impressum';
import VerifedEmail from '../componenets/VerifiedEmail';


/* Main layour componenet: */
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/employeereg' element={<EmployeeReg />} />
            <Route path='/employer' element={<EmployerReg />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/cookies' element={<Cookies />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/data-protection' element={<DataProtection />} />
            <Route path='/impressum' element={<Impressum />} />
            
            <Route path='/employerVerify' element={<VerifedEmail />} />
            <Route path='/employeeVerify' element={<VerifedEmail />} />
        </Routes>
    )
};

export default MainRoutes;