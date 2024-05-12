
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { browserName, isIOS } from 'react-device-detect';
import Footer from './Footer';


const MainPage = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{    
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  return (
    <>
      <Navbar />

      <div id="main">
        <div id="video-container" className="d-flex justify-content-center">
  
          {(browserName === "Safari" && !(windowWidth<576)) && (
            <video
            id="hunor-safari"
            className={`no-background-hunor`}
            autoPlay
            muted
            playsInline
            >
              <source
                src="images/welcome-anim-safari.mov"
                type="video/quicktime"
                />
              Your browser does not support the video tag.
            </video>
          )}

          {((browserName === "Safari" && ((windowWidth<576)) || isIOS)) && (
            <video
            id="hunor-safari-mobil"
            className={`no-background-hunor`}
            autoPlay={true}
            muted
            playsInline
            >
              <source src="images/welcome-anim-mobil-safari.mov" />
            </video>
          )}

          {
            (
              (browserName !== "Safari" && !isIOS) && !(windowWidth<576)

            ) && (
            <video
              id="hunor-regular"
              className={`no-background-hunor`}
              autoPlay={true}
              muted
              playsInline
            >
              <source src="images/welcome-anim.webm" />
            </video>
            )
          }

          {
            (
              (browserName !== "Safari" && !isIOS) && (windowWidth<576)
            ) && (
              <video
                id="hunor-regular-mobil"
                className={`no-background-hunor`}
                autoPlay={true}
                muted
                playsInline
              >
              <source src="images/welcome-anim-mobil.webm" />
            </video>
            )
          }

        </div>

        <div
          id="preregistration-outer-container"
          className="d-flex flex-wrap align-items-center justify-content-center px-3"
        >
          <div className="preregistrationContainer mx-3 my-2 m-md-3 px-4 py-4 text-center col-12 col-md-6">
            <h2 className="preregistrationTitle mb-3">Munkáltatóknak</h2>
            <p className="preregistrationText pb-3">
              Találd meg a <strong>tökéletes</strong> munkaerőt <br />
              számodra
            </p>
            <Link className="preregistrationButton" to="/employer">
              Előregisztrálok
            </Link>
          </div>

          <div className="preregistrationContainer mx-3 my-2 m-md-3 px-5 py-4 text-center col-12 col-md-6">
            <h2 className="preregistrationTitle mb-3">Álláskeresőknek</h2>
            <p className="preregistrationText pb-3">
              Vedd kezedbe a <strong>jövődet</strong> és építs karriert az
              erősségeidre
            </p>
            <Link className="preregistrationButton" to="/employeereg">
              Előregisztrálok
            </Link>
          </div>
        </div>

        <div
          id="infos-outer-container"
          className="d-flex flex-wrap align-items-center justify-content-center"
        >
          <div className="infosContainer text-center col-12 col-md-4 my-2 p-3">
            <img src="images/sun_icon.svg" alt="sun icon" />
            <h3 className="infosTitle">Megoldás</h3>
            <p className="infosText">
              Ha eleged van az álláskeresés, vagy a toborzás nehézségeiből,
              velünk búcsút inthetsz nekik
            </p>
          </div>

          <div className="infosContainer text-center col-12 col-md-4 my-2 p-3">
            <img src="images/flames_icon.svg" alt="flames icon" />
            <h3 className="infosTitle">Match</h3>
            <p className="infosText">
              Találjatok egymásra a jövőbeli munkahelyeddel, és építs olyan
              karriert amiről mindig is álmodtál
            </p>
          </div>

          <div className="infosContainer text-center col-12 col-md-4 my-2 p-3">
            <img
              src="images/checked_checkbox_icon.svg"
              alt="checked checkbox icon"
            />
            <h3 className="infosTitle">A te döntésed</h3>
            <p className="infosText">
              Cégként és munkavállalóként is segítünk, hogy a maximumot hozhasd
              ki magadból
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <p className="my-5 mx-3" id="slogan-on-bottom-of-the-page">
            Biztonságot adunk a vállalkozásoknak és karriert a munkavállalóknak
          </p>
        </div>

        <div
          id="bottom-preregistration-container"
          className="mb-5 pd-5d-flex flex-column justify-content-between align-items-center"
        >
          <h4 id="bottom-preregistration-title">Előregisztrálok</h4>
          <div
            id="bottom-preregistration-button-container"
            className="d-flex flex-column flex-md-row align-items-center justify-content-center"
          >
            <Link
              className="preregistrationButton preregistrationButton-bottom my-2 m-md-3 p-3 text-center col-12 col-md-6"
              to="/employer"
            >
              Munkáltatóként
            </Link>
            <Link
              className="preregistrationButton preregistrationButton-bottom m-md-3 p-3 text-center col-12 col-md-6"
              to="/employeereg"
            >
              Álláskeresőként
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;