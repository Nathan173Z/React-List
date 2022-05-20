import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import PagesSearchBooks from '../pages/Search/Search';
  import PagesPromotionForm from '../components/ListBooks/Form/FormBooks'

  const Root = () =>{

    return(
        <Router>
            <Routes>
                  <Route path="/" element={<PagesSearchBooks />} />
                  <Route path="/create" element={<PagesPromotionForm />} />
            </Routes>
            
        </Router>

    );

  }

  export default Root;