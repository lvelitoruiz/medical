import axios from 'axios';


export const paginateInformation = async (parameter,page,size,word) => {

    let elements = [];
    const APIURL = process.env.GATSBY_API_URL;

    await axios.get(`${APIURL}${parameter}?pagination[page]=${page}&pagination[pageSize]=${size}&populate=*&filters[title][$contains]=${word}`).then(response => {
        const responseLocations = response.data;
        elements = responseLocations;
    });
    return elements;

} 