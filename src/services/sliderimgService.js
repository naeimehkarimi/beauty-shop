
import http from './httpService';
import axios from 'axios';


export const getsliderimgs = () => {
    return (http.get('/sliderdata.json')); 
}


