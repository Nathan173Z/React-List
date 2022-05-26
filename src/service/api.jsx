import axios from 'axios';



export default axios.create({
    
    baseURL : 'https://api-list-books.azurewebsites.net/books/',
    //  baseURL: 'http://localhost:3000',
    

})