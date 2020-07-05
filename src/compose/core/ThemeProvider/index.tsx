import React from 'react';
import '../styles/reset.sass';

const ThemeProvider = ({ children, theme }: any) => {
  return <div>{children}</div>;
};

export default ThemeProvider;
