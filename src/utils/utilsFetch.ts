import axios, {AxiosError} from "axios";

/*
const contactUsApi = 'https://corsproxy.io/?' + encodeURIComponent(`${process.env.REACT_APP_CONTACT_US_API}`);
const employeeRegApi = 'https://corsproxy.io/?' + encodeURIComponent(`${process.env.REACT_APP_EMPLOYEE_REG_API}`);
const employerRegApi = 'https://corsproxy.io/?' + encodeURIComponent(`${process.env.REACT_APP_EMPLOYER_REG_API}`);

const employeeEmailCheckApi = 'https://corsproxy.io/?' + encodeURIComponent(`${process.env.REACT_APP_EMPLOYEE_EMAILCHECK_API}`);
const employerEmailCheckApi = 'https://corsproxy.io/?' + encodeURIComponent(`${process.env.REACT_APP_EMPLOYER_EMAILCHECK_API}`);
*/

const contactUsApi = `${process.env.REACT_APP_CONTACT_US_API}`;
const employeeRegApi = `${process.env.REACT_APP_EMPLOYEE_REG_API}`;
const employerRegApi = `${process.env.REACT_APP_EMPLOYER_REG_API}`;

const employeeEmailCheckApi = `${process.env.REACT_APP_EMPLOYEE_EMAILCHECK_API}`;
const employerEmailCheckApi = `${process.env.REACT_APP_EMPLOYER_EMAILCHECK_API}`;

const employeeTokenCheckApi = `${process.env.REACT_APP_EMPLOYEE_TOKENCHECK_API}`;
const employerTokenCheckApi = `${process.env.REACT_APP_EMPLOYER_TOKENCHECK_API}`;


const apiKey = process.env.REACT_APP_API_KEY;

interface contactUsFormData {
    apikey: string | undefined;
    first_name: string;
    last_name: string;
    email: string;
    country_code: string;
    phone_number: string;
    msg_text: string;
    subscribes_to_newsletter: number;
    data_protection_terms_criteria: number;
};

interface employeeRegData {
    apikey: string | undefined;
    reg_date: string;
    first_name: string;
    email: string;
    terms_and_conditions: number;
    data_protection_terms: number;
    subscribes_to_newsletter: number;
};

interface employerRegData {
    apikey: string | undefined;
    reg_date: string;
    company_name: string;
    email: string;
    address_zip: string;
    address_city: string;
    address: string;
    tax_number: string;
    industry_id: number;
    number_of_employees: string;
    contact_person_first_name: string;
    contact_person_last_name: string;
    country_code: string;
    phone_number: string;
    contact_person_position: number;
    terms_and_conditions: number;
    data_protection_terms: number;
    subscribes_to_newsletter: number;
};

interface employeeEmailCheck {
    apikey: string | undefined;
    email: string;
};

interface tokenData {
    token: string
};

type FormData = contactUsFormData | employerRegData | employeeRegData | employeeEmailCheck | tokenData;

const fetchData = async (formData: FormData, apiUrl: string | undefined) => {
    const config = {
        method: 'POST', /* Post method van mindenhol */
        url: apiUrl,
        data: formData,
    };

    try {
        const response =  await axios(config);
        return response.data;
    } catch (error) {
        const fetchError = error as AxiosError;
        console.error('Error during fetch:',  fetchError.response || fetchError.message)
        throw error;
    };

};


export {
    fetchData,
    contactUsApi,
    employeeRegApi,
    employerRegApi, 
    employeeEmailCheckApi,
    employerEmailCheckApi,
    employeeTokenCheckApi,
    employerTokenCheckApi,
    apiKey
};