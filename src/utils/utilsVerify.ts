import { employeeTokenCheckApi, employerTokenCheckApi, fetchData } from "./utilsFetch";

const verifyToken = async ( navigate: (path: string) => void ) => {
    const fullUrl = window.location.href;
    //console.log('this is the full url:', fullUrl);

    const isValidFullUrl = fullUrl.includes('https://abovo.jobs/valid2.html')

    //console.log(fullUrl);
    //console.log(isValidFullUrl);

    if (isValidFullUrl) {
        const regex = /[?&]token=(ER|EE)([a-zA-Z0-9]+)/;
        const matches = fullUrl.match(regex);

        //console.log('Matches:', matches);

        if (matches) {
            const userType = matches[1];
            const token = matches[2];
            //console.log('User Type:', userType);
            //console.log('Token:', token);

            if (userType === 'EE') {
                let finalToken = 'EE' + token;
                //console.log('This is the final token:', finalToken);
                let response = await fetchData({ token: finalToken }, employeeTokenCheckApi);
                //console.log('Employee Token Response:', response);
                if (response.msgCode === 200) {
                    navigate('/employeeVerify');
                } else {
                    console.error('Invalid employee token.');
                }
            } else if (userType === 'ER') {
                let fnalToken = 'ER' + token;
                let response = await fetchData({token: fnalToken}, employerTokenCheckApi);
                //console.log('Employer Token Response:', response);
                if (response.msgCode === 200) {
                    navigate('/employerVerify');
                } else {
                    console.error('Invalid employer token.');
                }
            }
        } else {
            console.error('Invalid or missing token.');
        }
    } else {
        console.log('URL does not match the expected pattern.');
    }
};

export default verifyToken;