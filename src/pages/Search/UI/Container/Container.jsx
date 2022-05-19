import React from 'react';
import container from './Container.module.css'

function UIContainer({ children }) {
  return (
    <div className={container.UIcontainer}>
        {children}
    </div>
  );
}

export default UIContainer;
