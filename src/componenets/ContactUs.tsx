
import { useForm, Controller } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';
import { useState } from 'react';
import { CountryCodeOptionsType, countryCodeOptions } from '../utils/utilsOptions'; // Ensure this import is correct based on your directory structure
import '../styles/contactUs.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { apiKey, contactUsApi, fetchData } from '../utils/utilsFetch';

interface FormData {
    lastName: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    countryCode: string;
    msgText: string;
    subscribesToNewsletter: boolean;
    dataProtectionTerms: boolean;
};

function ContactUs() {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>();
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [isFocused, setIsFocused] = useState(false);
    const [msgText, setMsgText] = useState('');



    const onSubmit = async (data: FormData) => {
        const body = {
            apikey: apiKey, 
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            country_code: data.countryCode,
            phone_number: data.phoneNumber,
            msg_text: data.msgText,
            subscribes_to_newsletter: data.subscribesToNewsletter ? 1 : 0,
            data_protection_terms_criteria: data.dataProtectionTerms ? 1 : 0
        };

        try {
            const response = await fetchData(body, contactUsApi);
            setMessage("Registration success");

            if (response.msgCode === 200 && response.msgMessage === 'success') {
                setSuccess(true);
            } else {
                setSuccess(false);
            }

        } catch (error) {
            console.error('Server error:', error);
            setMessage('Failed to register. Please try again. ');
            setSuccess(false);
        }
    };


    return (
        <>
            {!success && (
                <>
                    <Navbar />
                        <div 
                            className="row justify-content-between mx-3 mb-5 pd-5 contactUsPaddingTop"
                        >
                            <div
                                className="row col-md-6 contactusContainer"
                                id="contactusContainer"
                            >
                                <div className="row ">
                                    <div
                                        id="getintouch"
                                        className="text-section mx-xl-auto mt-4 mb-5 row text-start"
                                    >
                                        <h1 id="getintouchTitle">Vedd fel velünk a kapcsolatot!</h1>
                                        <p id="getintouchText">
                                        Ha kérdésed van az Abovóval kapcsolatban, fordulj hozzánk
                                        bizalommal
                                        </p>
                                    </div>
                                </div>

                                <div id="contactDataOuterContainer"
                                style={{marginBottom: '50px', marginTop: '50px'}}>
                                    <div id="">
                                        <h2 className="contactDataTitle">
                                        Általános ügyfélszolgálat
                                        </h2>
                                        <p className="contactDataText">
                                        ABOVO Magyarország
                                        <br />
                                        Markó utca 7. félemelet 2.
                                        <br />
                                        Budapest
                                        <br />
                                        1055
                                        </p>
                                        <p className="contactDataEmail">abovo@opticruiter.com</p>
                                    </div>

                                    <div id="">
                                        <h2 className="contactDataTitle">Sajtó és PR</h2>
                                        <p className="contactDataText">
                                        BrekaCom
                                        <br />
                                        Bódis Réka
                                        <br />
                                        +36 30 475 0368 <br />
                                        bodis.reka@brekacom.com
                                        </p>
                                        <p className="contactDataEmail">abovo@opticruiter.com</p>
                                    </div>

                                    <div id="">
                                        <h2 className="contactDataTitle">
                                        Fejlesztés és adatvédelem
                                        </h2>
                                        <p className="contactDataEmail">
                                        development@opticruiter.com
                                        </p>
                                    </div>

                                    <div id="">
                                        <h2 className="contactDataTitle">Befektetői kapcsolatok</h2>
                                        <p className="contactDataEmail">
                                        investor.relations@opticruiter.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-md-6 contactusContainer"
                                id="contactusContainer"
                                style={{marginTop: '50px'}}
                            >
                                <div
                                id="contactusSection"
                                className="mx-3 flex-shrink-0 mb-5 mx-auto mt-4 mb-auto"
                                style={{padding: '10px'}}
                                >
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3 row g-0.5 g-md-2">
                                            <div className="col-12 col-md-6 mb-3 mb-md-0">
                                                <input
                                                {...register("lastName", {
                                                    required: "Vezeték név nem lehet üres.",
                                                })}
                                                type="text"
                                                className={`form-control ${
                                                    errors.lastName ? "is-invalid" : ""
                                                }`}
                                                placeholder="Vezetéknév"
                                                />
                                                {errors.lastName && (
                                                <div className="invalid-feedback">
                                                    {errors.lastName.message}
                                                </div>
                                                )}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <input
                                                {...register("firstName", {
                                                    required: "Keresztnév nem lehet üres.",
                                                })}
                                                type="text"
                                                className={`form-control ${
                                                    errors.firstName ? "is-invalid" : ""
                                                }`}
                                                placeholder="Keresztnév"
                                                />
                                                {errors.firstName && (
                                                <div className="invalid-feedback">
                                                    {errors.firstName.message}
                                                </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                {...register("email", {
                                                required: "Az email nem lehet üres.",
                                                })}
                                                type="email"
                                                className={`form-control ${
                                                errors.email ? "is-invalid" : ""
                                                }`}
                                                placeholder="E-mail cím"
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                {errors.email.message}
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-3 d-flex">
                                            <div className="col-auto me-2">
                                                <Controller
                                                name="countryCode"
                                                control={control}
                                                rules={{ required: "Ez a mező nem lehet üres." }}
                                                render={({
                                                    field: { onChange, onBlur, value, ref },
                                                }) => (
                                                    <Select<CountryCodeOptionsType>
                                                    options={countryCodeOptions}
                                                    placeholder="Ország"
                                                    isClearable
                                                    isSearchable
                                                    onBlur={onBlur}
                                                    ref={ref}
                                                    value={countryCodeOptions.find(
                                                        (countryCodeOption) =>
                                                        countryCodeOption.value === value
                                                    )}
                                                    onChange={(
                                                        selectedOption: SingleValue<CountryCodeOptionsType>
                                                    ) => {
                                                        onChange(
                                                        selectedOption ? selectedOption.value : ""
                                                        );
                                                    }}
                                                    formatOptionLabel={(option, { context }) =>
                                                        context === "value"
                                                        ? `+${option.value}`
                                                        : option.label
                                                    }
                                                    styles={{
                                                        container: (provided) => ({
                                                        ...provided,
                                                        width: "100%",
                                                        }),
                                                        control: (provided) => ({
                                                        ...provided,
                                                        height: "65px", // Adjusted height
                                                        borderRadius: "8px",
                                                        alignItems: "center", // Vertically center the content
                                                        }),
                                                        placeholder: (provided) => ({
                                                        ...provided,
                                                        fontSize: "16px",
                                                        color: "#6c757d",
                                                        margin: "0",
                                                        alignItems: "start",
                                                        display: "flex",
                                                        justifyContent: "start",
                                                        marginBottom: "5px",
                                                        }),
                                                        indicatorSeparator: () => ({
                                                            display: "none",
                                                        }),
                                                        valueContainer: (provided) => ({
                                                        ...provided,
                                                        padding: "0 8px",
                                                        height: "100%",
                                                        alignItems: "center", // Vertically center the selected value
                                                        }),
                                                        indicatorsContainer: (provided) => ({
                                                        ...provided,
                                                        alignItems: "center",
                                                        }),
                                                        clearIndicator: (provided) => ({
                                                        display: "none",
                                                        }),
                                                        menu: (provided) => ({
                                                        ...provided,
                                                        width: "auto", // Adjust to fit the longest item
                                                        minWidth: "300px", // Set a minimum width
                                                        zIndex: 9999, // Ensure the dropdown is above other elements
                                                        marginTop: "0px",
                                                        }),
                                                    }}
                                                    />
                                                )}
                                                />
                                                {errors.countryCode && (
                                                <div className="invalid-feedback">
                                                    {errors.countryCode.message}
                                                </div>
                                                )}
                                            </div>
                                            <div className="col">
                                                <input
                                                {...register("phoneNumber", {
                                                    required: "A telefonszám nem lehet üres.",
                                                })}
                                                type="text"
                                                className={`form-control ${
                                                    errors.phoneNumber ? "is-invalid" : ""
                                                }`}
                                                placeholder="Telefonszám"
                                                />
                                                {errors.phoneNumber && (
                                                <div className="invalid-feedback">
                                                    {errors.phoneNumber.message}
                                                </div>
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className="mb-1"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Controller
                                                name="msgText"
                                                control={control}
                                                rules={{ required: "Az üzenet nem lehet üres." }}
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <textarea
                                                        className={`form-control custom-textarea ${
                                                            errors.msgText ? "is-invalid" : ""
                                                        } mb-3`}
                                                        rows={5}
                                                        value={value}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        placeholder="Hogyan segíthetünk?"
                                                    ></textarea>
                                                )}
                                            />
                                            {errors.msgText && (
                                                <div className="invalid-feedback">
                                                    {errors.msgText.message}
                                                </div>
                                            )}
                                        </div>


                                        <div
                                        className="statements-container"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                        }}
                                        >
                                            <div
                                                className="form-check mb-2"
                                                style={{
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignContent: "center",
                                                }}
                                            >
                                                <input
                                                {...register("subscribesToNewsletter")}
                                                type="checkbox"
                                                className="form-check-input"
                                                style={{ marginTop: "5px", marginRight: "7px" }}
                                                />
                                                <label
                                                className="form-check-label mb-1"
                                                style={{ marginBottom: "5px" }}
                                                >
                                                Feliratkozok a hírlevélre
                                                </label>
                                            </div>

                                            <div className="form-check mb-3">
                                                <input
                                                {...register("dataProtectionTerms", {
                                                    required: "Az adatvédelmi szabályzat elfogadása kötelező.",
                                                })}
                                                type="checkbox"
                                                className={`form-check-input ${
                                                    errors.dataProtectionTerms ? "is-invalid" : ""
                                                }`}
                                                />
                                                <label
                                                className="form-check-label mb-1"
                                                style={{ marginBottom: "5px" }}
                                                htmlFor='dataProtectonTerms'
                                                >
                                                    Elfogadom az adatvédelmi és adatkezelési szabályzatot
                                                </label>
                                                {errors.dataProtectionTerms && (
                                                    <div className="invalid-feedback">
                                                        {errors.dataProtectionTerms.message}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-1">
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100"
                                                style={{

                                                backgroundColor: "#FBFBFB",
                                                color: "#001AA3",
                                                }}
                                            >
                                                Küldés
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <Footer />
                </>
            )}
            {success && (
                <>
                    <div className="contactUsSuccessContainer">
                        <div className="preregistrationContainer mx-auto p-3">
                            <div className="preRegInner">
                            <div className="mb-3 d-flex justify-content-center">
                                <a href="">
                                <img
                                    src="images/abovoLogo.svg"
                                    alt="Abovo logo"
                                    id="abovoLogo"
                                />
                                </a>
                            </div>

                            <h1 className="preregistration-form-title">
                                {" "}
                                Köszönjük hogy feltetted a kérdésedet.{" "}
                            </h1>

                            <p>
                                {" "}
                                Kollégáink hamarosan válaszolnak a megadott e-mail címre.
                            </p>

                            <Link to="/" className="w-100">
                                <button className="btn successButtonStyle">
                                {" "}
                                Vissza a főoldalra{" "}
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default ContactUs;