import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import PagesSearchBooks from '../pages/Search/Search';
  import PagesPromotionForm from '../pages/Form/form';

  const Root = () =>{

    return(
        <Router>
            <Routes>
                  <Route path="/" element={<PagesSearchBooks />} />
                  <Route path="/create" element={<PagesPromotionForm />} />
                  <Route path="/edit/:id" element={<PagesPromotionForm />} />
            </Routes>
            
        </Router>

    );

  }

  export default Root;