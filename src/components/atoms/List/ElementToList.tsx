import React from 'react';

const ElementToList = (props: any): any => {
  return React.createElement(
    props.itemType,
    { key: props.item.toString(), className: props.classNameList },
    props.item,
  );
};

export default ElementToList;
