import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };



  return (
          <>
            {isSmallScreen && 
              <nav id="navbar" className="fixed-top">
                <div id="navbar-inner">
                  <div className="navbar navbar-expand-md px-lg-5 m-2 mx-3">
                    <Link to="/" className="navbar-brand">
                      <img src="images/abovoLogo.svg" alt="Abovo Logo" />
                    </Link>

                    {/* Hamburger ikon a mobil nézethez */}
                    <button
                      className="navbar-toggler border-0"
                      type="button"
                      onClick={toggleMenu}
                      aria-label="Toggle navigation"
                    >
                      <img
                        className="menu-icon"
                        src={isOpen ? 'images/hamburgerMenuClose.svg' : 'images/hamburgerMenu.png'}
                        alt="Menu"
                      />
                    </button>

                    {/* Mobil menü tartalom */}
                    <div className={`navbar-collapse-container ${isOpen ? 'open' : ''}`} id="navbar-items-outer-container">
                      <ul className="navbar-nav" id="navbar-items-inner-container">
                        {/* Főmenü elemek */}
                        <div className='mobil-nav-list'>
                          <li className="nav-item">
                              <Link
                              id="homeNavLink"
                              className={`nav-link custom-nav-item ${location.pathname === '/' ? 'current-page-nav-item' : ''}`}
                              to="/"
                              >
                              Kezdőlap
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link
                              className={`nav-link custom-nav-item ${location.pathname === '/contactus' ? 'current-page-nav-item' : ''}`}
                              to="/contactus"
                              >
                              Lépj velünk kapcsolatba
                              </Link>
                          </li>
                        </div>

                        {/* Almenü elemek */}
                        <div className='mobil-nav-list'>
                          <li className="nav-item">
                              <Link className="nav-link contactus-nav-item custom-nav-item" to="/employer">
                              Munkáltatóknak
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link custom-nav-item" to="/employeereg">
                              Álláskeresőknek
                              </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            }
            {!isSmallScreen && 
              <nav id="navbar" className="fixed-top">
                  <div id="navbar-inner">
                      <div className="navbar navbar-expand-md px-lg-5  m-2 mx-3">
                        <Link to="/" className="navbar-brand">
                          <img src="images/abovoLogo.svg" alt="Abovo Logo" />
                        </Link>

                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items-outer-container" aria-controls="navbar-items-outer-container" aria-expanded="false" aria-label="Toggle navigation">
                              <img className="d-md-none menu-icon" src="images/hamburgerMenu.png" alt="Menu"/>
                          </button>

                          <div className="collapse navbar-collapse" id="navbar-items-outer-container">
                              <ul className="navbar-nav" id="navbar-items-inner-container">
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <Link
                                          id="homeNavLink"
                                          className={`nav-link custom-nav-item ${location.pathname === '/' ? 'current-page-nav-item' : ''}`}
                                          to="/"
                                          >
                                            Kezdőlap
                                          </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link
                                          className={`nav-link custom-nav-item ${location.pathname === '/contactus' ? 'current-page-nav-item' : ''}`}
                                          to="/contactus"
                                          >
                                            Lépj velünk kapcsolatba
                                          </Link>
                                      </li>
                                  </ul>

                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <Link className="nav-link contactus-nav-item custom-nav-item" to="/employer">
                                            Munkáltatóknak
                                          </Link>
                                      </li>

                                      <li className="nav-item">
                                          <Link className="nav-link custom-nav-item" to="/employeereg">
                                            Álláskeresőknek
                                          </Link>                                      
                                      </li>
                                  </ul>
                              </ul>
                          </div>
                      </div>
                  </div>
              </nav>
            }
        </>
  );
}

export default Navbar;
