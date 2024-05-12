import Footer from "./Footer";
import Navbar from "./Navbar";

function Cookies() {
    return (
        <>
            <div className="coockies-container">
                <Navbar />
                <div className="row justify-content-center mx-5 pd-5 mt-5 mainTextContainer">
                    <h1 className="text_page_title">Sütik</h1>
                    <div className="text_page_container">
                        <p>
                            Feltöltés alatt! Bővebb információ: <a href="mailto:budapest@opticruiter.com">budapest@opticruiter.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cookies;