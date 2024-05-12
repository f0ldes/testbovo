import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { pageview } from './utils/gtag';
import MainRoutes from './layout/Layout';
import './App.css';
import { initMatomo } from './utils/matomo';
import verifyToken from './utils/utilsVerify';



function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    initMatomo()
  }, []);

  useEffect(() => {
    verifyToken(navigate);
  }, [location.search])

  return <MainRoutes />;
}

export default App;
