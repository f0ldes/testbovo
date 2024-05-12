import '../styles/employerReg.css';
import { useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';
import { contactPersonOptions, countryCodeOptions, industryOptions, numberOfEmployeeOptions } from '../utils/utilsOptions';
import { IndustryOptionType, EmployeeNumberOptionsType, CountryCodeOptionsType, ContactPersonPositionsType } from '../utils/utilsOptions'; // muszaly külön, név szerint importálni
import { apiKey, employerEmailCheckApi, employerRegApi, fetchData } from '../utils/utilsFetch';
import { TaxNumberInput } from '../utils/utilsTaxInput'


interface formData {
    companyName: string;
    companyEmail: string;
    addressZip: string;
    addressCity: string;
    address: string;
    taxNumber: string;
    industryId: string;
    numberOfEmployees: string;
    contactPersonFirstName: string;
    contactPersonLastName: string;
    countryCode: string;
    phoneNumber: string;
    contactPersonPosition: string;
    termsAndConditions: boolean;
    dataProtectionTerms: boolean;
    subscribeToNewsletter: boolean;
};
  


/* Employer registration from */
const EmployerReg = () => {
    const { control, register, handleSubmit, formState: { errors }, getValues, setError, clearErrors } = useForm<formData>();
    const [message, setMessage] = useState<string>("");
    const [formData, setFormData] = useState({});
    const [currentSection, setCurrentSection] = useState(1);
    const [success, setSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);


    const onSubmit: SubmitHandler<formData> = async (data) => {
        const updatedFormData = { ...formData, ...data }
        setFormData(updatedFormData);
        if (emailError) setError('companyEmail', {type: 'manual', message: 'Ez az e-mail cím már használatban van.'});
        //console.log('this is the update form data:', updatedFormData);



        if (currentSection === 1 && !emailError) {
            setCurrentSection(currentSection + 1);
        } else {
            const body = {
                apikey: apiKey,
                reg_date: new Date().toISOString(),
                company_name: updatedFormData.companyName,
                email: updatedFormData.companyEmail,
                address_zip: updatedFormData.addressZip,
                address_city: updatedFormData.addressCity,
                address: updatedFormData.address,
                tax_number: updatedFormData.taxNumber,
                industry_id: parseInt(updatedFormData.industryId),
                number_of_employees: updatedFormData.numberOfEmployees,
                contact_person_first_name: updatedFormData.contactPersonFirstName,
                contact_person_last_name: updatedFormData.contactPersonLastName,
                country_code: updatedFormData.countryCode,
                phone_number: updatedFormData.phoneNumber,
                contact_person_position: parseInt(updatedFormData.contactPersonPosition),
                terms_and_conditions: updatedFormData.termsAndConditions,
                data_protection_terms: updatedFormData.dataProtectionTerms,
                subscribes_to_newsletter: updatedFormData.subscribeToNewsletter
            };

            try {
                const response = await fetchData(body, employerRegApi)

                if (response.msgCode === 200 && response.msgMessage === 'sucess') {
                    setSuccess(true)
                    setMessage('Registration is tottaly complete!');
                } else {
                    setSuccess(false)
                }
            } catch (error) {
                setSuccess(false)
                setMessage('Registration failed. Please try again later.');
                console.error('Error happened during registration.', error);
                console.log(message);
            }
        }
    };

    const checkEmailExists = async (email:string) => {
        if (!email) return;

        const body = { apikey: apiKey, email: email };
        try {
            const response = await fetchData(body, employerEmailCheckApi);
            if (response.msgCode === 300) {
                setError('companyEmail', {type: 'manual', message: 'Ez az e-mail cím már használatban van.'});
                setEmailError(true)
            } else {
                setEmailError(false)
                clearErrors('companyEmail');
            }
        } catch (error) {
            console.error('Error checking email:', error);
            setError("companyEmail", { type: "manual", message: "Hiba történt az e-mail cím ellenőrzése közben." });

        }
    };

    return (
        <div className="employerreg-container py-5">

            
        {!success && 
                <>
                    {currentSection === 1 && (
                        <div className="p-3 m-3 employerinnerreg-container">
                            <div className="margin-custom">
                                <Link to='/'>
                                    <img src="images/abovoLogo.svg" alt="Abovo logo" id="abovoLogo" />
                                </Link>
                            </div>
                            <h1 className="preregistration-form-title"> Vállalkozás adatai </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-100">

                                <div className="form-group mb-3 mt-3">
                                    <label htmlFor="companyName"> Társaság megnevezése </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        placeholder='Xy kft.'
                                        {...register("companyName", { 
                                            required: "A cég neve nem lehet üres.",
                                            maxLength: {
                                                value: 255,
                                                message: "A cég neve nem lehet 255 karakternél hosszabb."
                                            }
                                        })}
                                        className={`form-control custom-input ${errors.companyName ? 'is-invalid' : ''}`}                          
                                    />
                                    {errors.companyName && <div className="invalid-feedback">{errors.companyName.message as string}</div>}
                                </div>
                    
                                <div className="form-group mb-3 mt-3">
                                    <label htmlFor="companyEmail"> Társaság e-mail címe </label>
                                        <input
                                            type="email"
                                            id="companyEmail"
                                            placeholder="horvathrenata@mail.com"
                                            {...register("companyEmail", {required: "E-mail cím kötelező."})}
                                            onBlur={() => checkEmailExists(getValues("companyEmail"))}
                                            className={`form-control custom-input ${errors.companyEmail ? 'is-invalid' : ''}`}
                                        />
                                    {errors.companyEmail && <div className="invalid-feedback">{errors.companyEmail.message as string}</div>}
                                </div>
                    
                                <div className="form-group mb-3 mt-3">
                                    <label htmlFor="addressZip"> írányítószám: </label>
                                    <input
                                        type="text"
                                        id="addressZip"
                                        placeholder='1221'
                                        {...register("addressZip", { 
                                            required: "A cég neve nem lehet üres.",
                                            maxLength: {
                                                value: 4,
                                                message: "A cég írányitószáma nem hosszabb rövidebb 4 karakternél."
                                            },
                                            minLength: {
                                                value: 4,
                                                message: "A cég írányitószáma nem lehet rövidebb 4 karakternél."
                                            }
                                        })}
                                        className={`form-control custom-input ${errors.addressZip ? 'is-invalid' : ''}`}                          
                                    />
                                    {errors.addressZip && <div className="invalid-feedback">{errors.addressZip.message as string}</div>}
                                </div>
                    
                                <div className="form-group mb-3 mt-3">
                                    <label htmlFor="addressCity"> Település </label>
                                    <input
                                        type="text"
                                        id="addressCity"
                                        placeholder='Írd be'
                                        {...register("addressCity", { 
                                            required: "A város nem lehet üres.",
                                            maxLength: {
                                                value: 255,
                                                message: "A város neve nem lehet 255 karakternél hosszabb."
                                            }
                                        })}
                                        className={`form-control custom-input ${errors.addressCity ? 'is-invalid' : ''}`}                          
                                    />
                                    {errors.addressCity && <div className="invalid-feedback">{errors.addressCity.message as string}</div>}
                                </div>
                    
                                <div className="form-group mb-3 mt-3">
                                    <label htmlFor="address"> Cím </label>
                                    <input
                                        type="text"
                                        id="address"
                                        placeholder='Fő utca 5/4'
                                        {...register("address", { 
                                            required: "A cím nem lehet üres.",
                                            maxLength: {
                                                value: 255,
                                                message: "A cím neve nem lehet 255 karakternél hosszabb."
                                            }
                                        })}
                                        className={`form-control custom-input ${errors.address ? 'is-invalid' : ''}`}                          
                                    />
                                    {errors.address && <div className="invalid-feedback">{errors.address.message as string}</div>}
                                </div>
                    
                                <div className="form-group mb-3 mt-3">
                                    <TaxNumberInput control={control} name="taxNumber" errors={errors} />
                                </div>
                    
                                <div className="form-group mb-3 mt-3">
                                    <label htmlFor="industryId">Iparág</label>
                                    <Controller
                                        name="industryId"
                                        control={control}
                                        rules={{ required: 'Ez a mező nem lehet üres.' }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <Select<IndustryOptionType>
                                                options={industryOptions}
                                                placeholder="Válassz"
                                                isClearable
                                                isSearchable
                                                onBlur={onBlur} 
                                                ref={ref}        
                                                value={industryOptions.find(industryOption => industryOption.value === value)}  
                                                onChange={(selectedOption: SingleValue<IndustryOptionType>) => {
                                                    onChange(selectedOption ? selectedOption.value : '')
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.industryId && <div className="invalid-feedback">{errors.industryId.message}</div>}
                                </div>
                    
                                <div className="form-group mb-1 mt-3">
                                    <label htmlFor="numberOfEmployees"> Alkalmazottak száma </label>
                                    <Controller
                                        name="numberOfEmployees"
                                        control={control}
                                        rules={{ required: 'Ez a mező nem lehet üres.' }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <Select<EmployeeNumberOptionsType>
                                                options={numberOfEmployeeOptions}
                                                placeholder="Válassz"
                                                isClearable
                                                isSearchable
                                                onBlur={onBlur} 
                                                ref={ref}        
                                                value={numberOfEmployeeOptions.find(numberOfEmployeeOption => numberOfEmployeeOption.value === value)}  
                                                onChange={(selectedOption: SingleValue<EmployeeNumberOptionsType>) => {
                                                    onChange(selectedOption ? selectedOption.value : '')
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.industryId && <div className="invalid-feedback">{errors.industryId.message}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary registration-button w-100 mt-3" onClick={handleSubmit(onSubmit)}> Tovább </button>
                    
                            </form>
                        </div>
                    )}

                    {currentSection === 2 && (
                        <div className="border rounded p-3 m-3 employerinnerreg-container">
                            <div className="margin-custom">
                                <Link to='/'>
                                    <img src="images/abovoLogo.svg" alt="Abovo logo" id="abovoLogo" />
                                </Link>
                            </div>
                            <h1 className="preregistration-form-title"> Kapcsolattartó adatai: </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="contactPersonFirstName"> Kapcsolattartó keresztneve: </label>
                                    <input
                                        type="text"
                                        id="contactPersonFirstName"
                                        placeholder='Renáta'
                                        {...register("contactPersonFirstName", { 
                                            required: "A kapcsolattartó nem lehet üres.",
                                            maxLength: {
                                                value: 255,
                                                message: "A kapcsolattartó keresztneve nem lehet több mint 255 karakter."
                                            }
                                        })}
                                        className={`form-control custom-input ${errors.contactPersonFirstName ? 'is-invalid' : ''}`}                          
                                    />
                                    {errors.contactPersonFirstName && <div className="invalid-feedback">{errors.contactPersonFirstName.message as string}</div>}
                                </div>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="contactPersonLastName"> Kapcsolattartó vezetékneve: </label>
                                        <input
                                            type="text"
                                            id="contactPersonLastName"
                                            placeholder="Horváth"
                                            {...register("contactPersonLastName", {
                                                required: "Kapcsolattartó vezetékneve nem lehet üres.",
                                                maxLength: {
                                                    value: 255,
                                                    message: "A kapcsolattartó keretsztneve nem lehet több mint 255 karakter."
                                                }
                                            })}
                                            className={`form-control custom-input ${errors.contactPersonLastName ? 'is-invalid' : ''}`}
                                        />
                                    {errors.contactPersonLastName && <div className="invalid-feedback">{errors.contactPersonLastName.message as string}</div>}
                                </div>

                                <div className="form-group w-100 mb-3 mt-3">
                                    <div className=" w-100 d-flex">
                                        <div className="country-code-container" style={{marginRight: '5px'}}>
                                            <label htmlFor="countryCode">Előhívőszám: </label>
                                            <Controller
                                                name="countryCode"
                                                control={control}
                                                rules={{ required: 'This field is required' }}
                                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                                    <Select<CountryCodeOptionsType>
                                                        options={countryCodeOptions}
                                                        placeholder="Válassz"
                                                        isClearable
                                                        isSearchable
                                                        onBlur={onBlur}
                                                        ref={ref}
                                                        value={countryCodeOptions.find(countryCodeOption => countryCodeOption.value === value)}
                                                        onChange={(selectedOption: SingleValue<CountryCodeOptionsType>) => {
                                                            onChange(selectedOption ? selectedOption.value : '')
                                                            console.log(selectedOption)
                                                        }}
                                                        styles={{
                                                            clearIndicator: (provided) => ({
                                                                ...provided,
                                                                display: 'none',
                                                            })
                                                        }}
                                                        formatOptionLabel={(option, { context }) => context === 'value' ? `+${option.value}` : option.label}

                                                    />
                                                )}
                                            />
                                            {errors.countryCode && <div className="invalid-feedback">{errors.countryCode.message}</div>}
                                        </div>

                                        <div className="w-100" style={{marginLeft: '5px'}}>
                                            <label htmlFor="phoneNumber"> Telefonszám </label>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                placeholder='Telefonszám'
                                                {...register("phoneNumber", { 
                                                    required: "A telefonszám helye nem lehet üres.",
                                                    maxLength: {
                                                        value: 255,
                                                        message: "A cég neve nem lehet 255 karakternél hosszabb."
                                                    }
                                                })}
                                                className={`form-control custom-input ${errors.phoneNumber ? 'is-invalid' : ''}`}                          
                                            />
                                            {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message as string}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group w-100 mb-3 mt-3">
                                    <label htmlFor="contactPersonPosition">Kapcsolattartó pozicíója</label>
                                    <Controller
                                        name="contactPersonPosition"
                                        control={control}
                                        rules={{ required: 'This field is required' }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <Select<ContactPersonPositionsType>
                                                options={contactPersonOptions}
                                                placeholder="Válaszd ki vagy írd be"
                                                isClearable
                                                isSearchable
                                                onBlur={onBlur} 
                                                ref={ref}        
                                                value={contactPersonOptions.find(contactPersonOption => contactPersonOption.value === value)}  
                                                onChange={(selectedOption: SingleValue<ContactPersonPositionsType>) => {
                                                    onChange(selectedOption ? selectedOption.value : '')
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.contactPersonPosition && <div className="invalid-feedback">{errors.contactPersonPosition.message}</div>}
                                </div>

                                <div className="form-statements mb-3 mt-3">
                                    <div  className="d-flex align-items-start">
                                        <input
                                            type="checkbox"
                                            id="subscribeToNewsletter"
                                            {...register("subscribeToNewsletter")}
                                            className={`${errors.subscribeToNewsletter ? 'is-invalid' : ''}`}
                                            style={{margin: '5px', marginLeft: '0px', marginRight: '10px', transform: 'scale(1.2)'}}
                                        />
                                        <label htmlFor="subscribeToNewsletter"> Feliratkozok a hírlevélre </label>
                                    </div>
                                </div>

                                <div className="form-statements mb-3 mt-3">
                                    <div className="d-flex align-items-center"> 
                                        <input
                                            type="checkbox"
                                            id="termsAndConditions"
                                            {...register("termsAndConditions", { required: "A felhasználási feltételek elfogadása kötelező." })}
                                            className={`${errors.termsAndConditions ? 'is-invalid' : ''}`}
                                            style={{ margin: '5px', marginLeft: '0px', marginRight: '10px', transform: 'scale(1.2)' }}
                                        />
                                        <label htmlFor="termsAndConditions"> Elfogadom a felhasznaloi felteteleket </label>
                                    </div>
                                    {errors.termsAndConditions && <div className="invalid-feedback">{errors.termsAndConditions.message as string}</div>}
                                </div>

                                <div className="form-statements mb-3 mt-3">
                                    <div className="d-flex align-items-start">
                                        <input
                                            type="checkbox"
                                            id="agreeGDPR"
                                            {...register("dataProtectionTerms", {required: "Az adatvédelmi szabályzat elfogadása kötelező."})}
                                            className={` ${errors.dataProtectionTerms ? 'is-invalid' : ''}`}
                                            style={{margin: '5px', marginLeft: '0px', marginTop: '6px', marginRight: '10px', transform: 'scale(1.2)'}}
                                        />
                                        <label htmlFor="agreeGDPR"> Elfogadom az adatvédelmi és adatkezelési szabályzatot </label>
                                    </div>
                                    {errors.dataProtectionTerms && <div className="invalid-feedback">{errors.dataProtectionTerms.message as string}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary registration-button w-100 mt-3" onClick={handleSubmit(onSubmit)}>Register</button>
                            </form>
                        </div>
                    )}
                </>
            }
            {success && (
                <div className="preregistrationContainer mx-3 p-3">
                    <div className="preRegInner">
                            <div className="mb-3 d-flex justify-content-center">
                                <Link to="/">
                                    <img src="images/abovoLogo.svg" alt="Abovo logo" id="abovoLogo"/>
                                </Link>
                            </div>
            
                            <h1 className="preregistration-form-title"> Sikeres előregisztráció </h1>

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

export default EmployerReg;
