import React from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UIButton from '../../UI/Button/Button';

const ItemContainer = styled.div`

border-radius: 4px;
background-color: #cca;
height: 140px;
width: 262px;
color: #29303b;
margin-bottom: 10px;
margin-top: 10px;
margin-right: 10px;
padding: 10px;
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

    


const Books = ( {books} ) =>{
   
 
    return(

        <ItemLink href={books.url} title="Clique para comprar">
            <ItemContainer>
               
                <Thumbnail src={books.image}></Thumbnail>
                <TitlePane>{books.title}</TitlePane>
                <PricePane>R$ {books.price}</PricePane>
                <Button variant="primary">Comprar</Button>
                <UIButton 
                component={Link}  
                to={`/edit/${books.id}`}>Editar</UIButton>
            </ItemContainer>
        </ItemLink>
        


    )

}

export default Books;