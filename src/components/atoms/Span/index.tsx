import React from 'react';

const Span = ({ text, editable, style }: any): JSX.Element => {
  return <span contentEditable={editable}>{text}</span>;
};

export default Span;
