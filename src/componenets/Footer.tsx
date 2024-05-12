import { Link } from "react-router-dom";

function Footer() {

    return (
        <>
            <div id="footer">

                <div className="footer-outer-section">

                    <div className="footer-section mx-3 d-flex flex-column">
                        <div id="poweredby_within_col" className="d-flex">
                            <a href="https://www.opticruiter.com">
                                <img src="images/poweredBy.svg" alt="powered by Opticruiter" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 footer-section mx-3 mt-2">
                        <Link className="footer_link" to="/cookies">Sütik</Link>
                        <Link className="footer_link" to="/terms-and-conditions">ÁSZF</Link>
                        <Link className="footer_link" to="/data-protection">Adatvédelmi szabályzat</Link>
                        <Link className="footer_link" to="/impressum">Impresszum</Link>
                    </div>

                </div>

                <div 
                    className="d-flex flex-column flex-lg-row justify-content-center footer-outer-section footer-outer-section-bottom px-5"
                    style={{height: '100%'}}
                >
                    <div id="all_right_reserved" className="col text-center text-lg-start">
                        <p>© 2024 All rights reserved. OptiCruiter Technologies Ltd.</p>
                    </div>

                    <div id="socials" className="col mx-auto d-flex flex-row justify-content-end">
                        <div id="socials_inner" className="d-flex flex-row">
                            <div className="col">
                                <a href="https://www.facebook.com/abovojobs/">
                                    <img src="images/facebook.svg" alt="facebook logo" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://www.instagram.com/abovojobs/">
                                    <img src="images/instagram.svg" alt="instagram logo" />
                                </a>
                            </div>

                            <div className="col">
                                <a href="https://www.threads.net/@abovojobs">
                                    <img src="images/threads.svg" alt="threads logo" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://www.tiktok.com/@abovo.jobs?_t=8lMeeU3ptIH&_r=1">
                                    <img src="images/tiktok.svg" alt="tiktok logo" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://twitter.com/Abovojobs">
                                    <img src="images/x.svg" alt="x logo" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://www.youtube.com/@AbovoJobs">
                                    <img src="images/youtube.svg" alt="youtube logo" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;