import React from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UIButton from '../../UI/Button/Button';
import {Trash} from 'phosphor-react';
import Book from './Books.module.css'



const ItemContainer = styled.div`

border-radius: 4px;
background-color: #d1d1d1;
height: 150px;
width: 340px;
color: #29303b;
margin-bottom: 10px;
margin-top: 10px;
margin-right: 10px;
padding: 10px;
position:relative;
display: inline-block;




`
const TitlePane = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    

`
const PricePane = styled.div`
    margin-bottom: 5px;
    
`
const Thumbnail = styled.img`
    width: auto;
    height: 100%;
    border: 0;
    vertical-align: middle;
    float: left;
    margin-right: 10px;
    

`
const ItemLink = styled.a`
    text-decoration: none;
    `

    


const Books = ( {books, onClickDelete} ) =>{
   
 
    return(

        <ItemLink >
            <ItemContainer>
         
            
                <Thumbnail src={books.image}></Thumbnail>
                <TitlePane >{books.title.substring (0,18)}...
                <button type="button" className={Book.bookDelete} 
            onClick={onClickDelete}><Trash size={20} 
            color="#c90d0d" weight="duotone" /></button></TitlePane>
            <PricePane>R$ {books.price}</PricePane>
                
            <div className={Book.bookedit}>
                <Button variant="primary" className={Book.bookcompra} 
                href={books.url}>Comprar</Button>
                <UIButton 
                component={Link}  
                to={`/edit/${books.id}`} className={Book.bookbuttomedit}>Editar</UIButton>
                </div>
    

            </ItemContainer>
           
        </ItemLink>
        


    )

}

export default Books;