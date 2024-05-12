import '../styles/employeeReg.css';
import { useState } from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import { Link } from  'react-router-dom';
import { fetchData, employeeRegApi, apiKey, employeeEmailCheckApi } from '../utils/utilsFetch'; 

interface formData {
    employeeName: string;
    employeeEmail: string;
    agreeTerms: boolean;
    agreeGDPR: boolean;
    agreeNewsLetter: boolean;
};

/* Employee registration form */
const EmployeeReg = () => {
    const { register, handleSubmit, formState: { errors }, getValues, setError, clearErrors } = useForm<formData>();
    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    const onSubmit: SubmitHandler<formData> = async (data) => {
        const body = {
            apikey: apiKey,
            reg_date: new Date().toISOString(),
            first_name: data.employeeName,
            email: data.employeeEmail,
            terms_and_conditions: data.agreeTerms ? 1 : 0,
            data_protection_terms: data.agreeGDPR ? 1 : 0,
            subscribes_to_newsletter: data.agreeNewsLetter ? 1 : 0
        };

       try {
            const response = await fetchData(body, employeeRegApi);
            setMessage("Registration successful!");

            if (response.msgCode === 200 && response.msgMessage === 'success') {
                setSuccess(true)
            } else {
                setSuccess(false);
            }

       } catch (error) {
            console.error('Server error:', error);
            setMessage("Failed to register. Please try again.");
            setSuccess(false);
            console.log(message);
       }
    };


    const checkEmailExists = async (email: string) => {
        if (!email) return; 
        
        const body = { apikey: apiKey, email: email };
        try {
            const response = await fetchData(body, employeeEmailCheckApi);
            if (response.msgCode === 300) {
                setError("employeeEmail", { type: "manual", message: "Ez az e-mail már használatban van." });
            } else {
                clearErrors("employeeEmail");
            }
        } catch (error) {
            console.error('Error checking email:', error);
            setError("employeeEmail", { type: "manual", message: "Hiba történt az e-mail cím ellenőrzése közben." });
        }
    };

    return (
        <div className="employeereg-container">


            {!success && 
                        <div className="p-3 m-3 employeeinnerreg-container">

                        <div className="margin-custom">
                            <Link to='/'>
                                <img src="images/abovoLogo.svg" alt="Abovo logo" id="abovoLogo" />
                            </Link>
                        </div>

                        <h1 className="preregistration-form-title" > Álláskeresőknek </h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group mb-3 mt-3">
                                <label htmlFor="employeeName"> Hogyan szólíthatunk? </label>
                                <input
                                    type="text"
                                    id="employeeName"
                                    placeholder='Renáta'
                                    {...register("employeeName", { required: "Ez a mező nem lehet üres." })}
                                    className={`form-control custom-input ${errors.employeeName ? 'is-invalid' : ''}`}                          
                                />
                                {errors.employeeName && <div className="invalid-feedback">{errors.employeeName.message as string}</div>}
                            </div>

                            <div className="form-group mb-3 mt-3">
                                <label htmlFor="employeeEmail"> E-mail cím </label>
                                    <input
                                        type="email"
                                        id="employeeEmail"
                                        placeholder="horvathrenata@mail.com"
                                        {...register("employeeEmail", {required: "E-mail cím kötelező."})}
                                        onBlur={() => checkEmailExists(getValues("employeeEmail"))}
                                        className={`form-control custom-input ${errors.employeeEmail ? 'is-invalid' : ''}`}
                                    />
                                {errors.employeeEmail && <div className="invalid-feedback">{errors.employeeEmail.message as string}</div>}
                            </div>

                            <div className="statement-container">

                                <div className="form-statements">
                                    <div className="d-flex align-items-center"> 
                                        <input
                                            type="checkbox"
                                            id="agreeTerms"
                                            {...register("agreeTerms", { required: "A felhasználási feltételek elfogadása kötelező." })}
                                            className={`${errors.agreeTerms ? 'is-invalid' : ''}`}
                                            style={{ margin: '5px', marginLeft: '0px', marginRight: '10px', transform: 'scale(1.2)' }}
                                        />
                                        <label htmlFor="agreeTerms"> Elfogadom a felhasznaloi felteteleket </label>
                                    </div>
                                    {errors.agreeTerms && <div className="invalid-feedback">{errors.agreeTerms.message as string}</div>}
                                </div>

                                <div className="form-statements mb-3 mt-3">
                                    <div className="d-flex align-items-start">
                                        <input
                                            type="checkbox"
                                            id="agreeGDPR"
                                            {...register("agreeGDPR", {required: "Az adatvédelmi szabályzat elfogadása kötelező."})}
                                            className={` ${errors.agreeGDPR ? 'is-invalid' : ''}`}
                                            style={{margin: '5px', marginLeft: '0px', marginTop: '6px', marginRight: '10px', transform: 'scale(1.2)'}}
                                        />
                                        <label htmlFor="agreeGDPR"> Elfogadom az adatvédelmi és adatkezelési szabályzatot </label>
                                    </div>
                                    {errors.agreeGDPR && <div className="invalid-feedback">{errors.agreeGDPR.message as string}</div>}
                                </div>

                                <div className="form-statements mb-3">
                                    <div  className="d-flex align-items-start">
                                        <input
                                            type="checkbox"
                                            id="agreeNewsLetter"
                                            {...register("agreeNewsLetter")}
                                            className={`${errors.agreeNewsLetter ? 'is-invalid' : ''}`}
                                            style={{margin: '5px', marginLeft: '0px', marginRight: '10px', transform: 'scale(1.2)'}}
                                        />
                                        <label htmlFor="agreeNewsLetter"> Feliratkozok a hírlevélre </label>
                                    </div>
                                </div>

                            </div>

                            <button type="submit" className="btn btn-primary w-100 registration-button" > Regisztráció </button>
                        </form>
                    </div>
            }

            {success && (
                <div className="preregistrationContainer mx-3 p-3">
                    <div className="preRegInner">
                            <div className="mb-3 d-flex justify-content-center">
                                <a href="https://abovo.jobs/">
                                    <img src="images/abovoLogo.svg" alt="Abovo logo" id="abovoLogo"/>
                                </a>
                            </div>
            
                            <h1 className="preregistration-form-title">Sikeres előregisztráció</h1>

                            <p> Kérjük, ellenőrizzd az e-mail fiókodat a regisztráció megerősítéséhez. Amennyiben nem találod az e-mailt a bejövő üzeneteknél, nézd meg a spamok között.</p>

                            <Link to='/' className='w-100'>
                                <button className="btn successButtonStyle" > Vissza a főoldalra </button>
                            </Link>
                            
                    </div>
                </div>
            )}

        </div>
    )
};

export default EmployeeReg;