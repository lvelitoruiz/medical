import axios from 'axios';
import { APIURL } from '../consts/constants';

export const loadInformation = async (parameter) => {

    const elements = [];

    await axios.get(`${APIURL}${parameter}?populate=*`).then(response => {
        const responseLocations = response.data.data;
        responseLocations.forEach(element => {
            elements.push(element);
        });
    });
    return elements;

} 