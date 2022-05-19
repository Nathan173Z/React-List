import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Books from '../../components/Books/Books'

const PagesListBooks = () => {
    
    const [listBooks, setlistBooks] = useState([]);

    useEffect( ()=>{

      axios.get('http://localhost:3004/books')
      .then(
        (response) => {
        console.log(response.data);
        setlistBooks(response.data);
        }
      );

    }, [] );
    
    return ( 

        <>
            {listBooks.map( (books) => (
            <Books books={books} key={books.id} /> 
            )
            )
          }
        
        </>



     );
}
 
export default PagesListBooks;
    
    
    
    
    
    
    
    
    
    
    
    
    
    