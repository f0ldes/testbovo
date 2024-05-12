import Footer from "./Footer";
import Navbar from "./Navbar";

function Impressum() {
    return (
        <>
            <Navbar />
            <div className="impressumContainer">
                <div className="row justify-content-between mx-3 pb-5 mt-5">
                    <div id="contactDataOuterContainer" className="d-flex flex-wrap justify-content-center">

                        <div id="contactDataIndividualContainer">
                            <h2 className="contactDataTitle">Ügyfélszolgálat:</h2>
                            <p className="contactDataText">
                                ABOVO Business Solutions Budapest<br />
                                Markó utca 7.<br />
                                Budapest<br />
                                1055
                            </p>
                            <p className="contactDataText">
                                Képviselő: Pintér Soma - projectvezető
                            </p>
                            <p className="contactDataEmail">
                                E-mail: abovo@opticruiter.com
                            </p>
                        </div>

                        <div id="contactDataIndividualContainer">
                            <h2 className="contactDataTitle">Üzemeltető:</h2>
                            <p className="contactDataText">
                                OptiCruiter Technologies Ltd.<br />
                                60 St Martins Lane<br />
                                London<br />
                                WC2N 4JS<br />
                                Cégjegyzésszám: 15370888<br />
                                Bejegyző hatóság: Companies House, Egyesült Királyság
                            </p>
                            <p className="contactDataText">
                                Képviselő: Pintér Gábor - ügyvezető
                            </p>
                            <p className="contactDataEmail">
                                E-mail: budapest@opticruiter.com
                            </p>
                        </div>

                        <div id="contactDataIndividualContainer">
                            <h2 className="contactDataTitle">Fejlesztés:</h2>
                            <p className="contactDataText">
                                OptiCruiter Technologies Ltd.
                            </p>
                            <p className="contactDataEmail">
                                E-mail: development@opticruiter.com
                            </p>
                        </div>

                        <div id="contactDataIndividualContainer">
                            <h2 className="contactDataTitle">Adatkezelés és adatvédelem:</h2>
                            <p className="contactDataText">
                                OptiCruiter Technologies Ltd.<br />
                                Markó utca 7. <br />
                                Budapest<br />
                                1055
                            </p>
                            <p className="contactDataText">
                                Adatvédelmi tisztviselő: Pintér Gábor
                            </p>
                            <p className="contactDataEmail">
                                E-mail: abovo@opticruiter.com
                            </p>
                        </div>

                        <div id="contactDataIndividualContainer">
                            <h2 className="contactDataTitle">Domain és hosting:</h2>
                            <p className="contactDataText">
                                GoDaddy.com Llc.<br />
                                100 S. Mill Ave Suite 1600<br />
                                Tempe, AZ 85281 USA
                            </p>
                            <p className="contactDataText">
                                Phone number: 020 7084 1810<br />
                                Fax number: (480) 624-2546<br />
                            </p>
                            <p className="contactDataEmail">
                                E-mail: HQ@godaddy.com
                            </p>
                        </div>

                        <div id="contactDataIndividualContainer">
                            <h2 className="contactDataTitle">Tárhely és szerver:</h2>
                            <p className="contactDataText">
                                AWS Amazon Web Services Inc. - Frankfurt
                            </p>
                            <p className="contactDataEmail">
                                E-mail: aws-EU-privacy@amazon.com
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Impressum;