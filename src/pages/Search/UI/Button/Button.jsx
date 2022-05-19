import React from 'react';
// import button from './Button.module.css';
import './Button.css'
const UIButton = ({ children, className, component: Component, theme, ...restProps}) => {

  // 1 children
  // 2 component
  // 3 className, criado para passar parâmetro para o margin-left e/ou outras propriedades css
  // 3.1 tirar o margin-left do css
  // 3.2 defaultProps
  // 4 ...restProps propriedades geral do component que vier por parâmetro, por exemplo <a href></a>, button
  // Button Nova promoção no Search
  // Button Salvar no Form 
  // 5 theme
  return (
      <Component className={`uiButton uiButton--${theme} ${className}`} {...restProps}>
        {children}
      </Component>
  );
};

UIButton.defaultProps = {
  Component:'a',
  className: '',
  theme: 'bordered-primary',
};

export default UIButton;
