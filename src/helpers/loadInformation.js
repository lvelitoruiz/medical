import axios from 'axios';


export const loadInformation = async (parameter) => {

    const elements = [];
    const APIURL = process.env.GATSBY_API_URL;

    await axios.get(`${APIURL}${parameter}?populate=*`).then(response => {
        const responseLocations = response.data.data;
        responseLocations.forEach(element => {
            elements.push(element);
        });
    });
    return elements;

} 