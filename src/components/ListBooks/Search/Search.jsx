import React, { useEffect, useState} from 'react';
import searchCss from './search.module.css'
import axios from 'axios';
import Books from '../Books/Books';
import UIButton from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import api from '../../../service/api';

function SearchBooks() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [onDelete, setOnDelete] = useState(null);

    useEffect( ()=>{

      const params = {};
      if(search){
        params.title_like = search;
      }

      axios.get('https://api-list-books.azurewebsites.net/books/', {params})
      .then(
        (response) => {
        console.log(response.data);
        setBooks(response.data);
        }
      );

    }, [search, onDelete] );
    
    const handleDelete = async (id) => {

      const method = 'delete';
      const url = `https://api-list-books.azurewebsites.net/books/${id}`;
      await api[method](url)
        .then((response) => {
          setOnDelete(id);
          return (<>Deletando....</>)
        });
  
    }
    
    
    
    return ( 
        <>
         <header className={searchCss.promotionSearchHeader}>
              <h1>Pesquisa de Livros</h1>
              <UIButton to="/create" component={Link} theme="contained-success">Novo Livro</UIButton>          
          </header>
          <input type="search"
                  className={searchCss.promotionSearchInput}
                  placeholder="Buscar"
                  value={search}
                  onChange={(ev) => setSearch(ev.target.value)}

          />
              
            {books.map( (books) => (
            <Books books={books} key={books.id}
            onClickDelete={ () => handleDelete(books.id)} /> 
            )
            )
          }

        
        
        </>




     );
}

export default SearchBooks;