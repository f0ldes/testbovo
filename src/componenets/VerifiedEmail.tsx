import '../styles/verify.css'
import { Link } from "react-router-dom";


const VerifedEmail = () => {
   return  (
        <div className="verifyreg-container py-5">
                <div className="verifyouter-container mx-3 p-3">
                    <div className="verify-inner">
                            <div className="mb-3 d-flex justify-content-center">
                                <Link to="/">
                                    <img src="images/abovoLogo.svg" alt="Abovo logo" id="abovoLogo"/>
                                </Link>
                            </div>
            
                            <h1 className="preregistration-form-title my-4">Üdvözlünk az Abovo-ban 👋</h1>

                            <p className="verification-text mb-5">Az indulásról és további részletekről ezen az e-mail címen tájékoztatunk.</p>

                            <Link to='/' className='w-100'>
                                <button className="btn successButtonStyle" > Vissza a főoldalra </button>
                            </Link>
                    </div>
                </div> 
        </div>
    )
}

export default VerifedEmail;



