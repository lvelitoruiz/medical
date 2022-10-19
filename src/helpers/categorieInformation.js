import axios from 'axios';


export const categorieInformation = async (parameter,page,size,word) => {

    let elements = [];
    const APIURL = process.env.GATSBY_API_URL;

    if(word == "") {
        await axios.get(`${APIURL}${parameter}?pagination[page]=${page}&pagination[pageSize]=${size}&populate=*&filters[cases][name][$contains]=${word}`).then(response => {
            const responseLocations = response.data;
            elements = responseLocations;
        });
    } else {
        await axios.get(`${APIURL}${parameter}?pagination[page]=${page}&pagination[pageSize]=${size}&populate=*&filters[cases][name][$eq]=${word}`).then(response => {
            const responseLocations = response.data;
            elements = responseLocations;
        });
    }
    

    
    return elements;

} 