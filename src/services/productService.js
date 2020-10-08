
import http from './httpService';
import axios from 'axios';

export const getproducts1 = () => {  
    return (http.get('/data.json'));  
};
export const getsingleproduct = (productId) => {
    return axios.get('/data.json').then(response => {
        let tempTodos = response.data;
        console.log(tempTodos.test);
        console.log('test1');
       let tempTodosarr = tempTodos.test;
       for (var i = 0; i < tempTodosarr.length; i++) {
            if (tempTodosarr[i].id == productId) {
                console.log('test2', tempTodosarr[i]);
                return tempTodosarr[i];
            }
        } 
        return null;
    })
    .catch(error => {
        console.log(error);
    });
  
}


