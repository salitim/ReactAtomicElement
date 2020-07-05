import React from 'react';
import ElementToList from './ElementToList';

type ListProps = {
  items: Array<string>;
  classNameLister: string;
  classNameList: string;
  itemType: string;
};

const Lister = {
  ul: function({ items, classNameLister, classNameList, itemType }: ListProps) {
    return (
      <ul className={classNameLister}>
        {items.map((item) => {
          return (
            <ElementToList
              key={item.toString()}
              item={item}
              classNameList={classNameList}
              itemType={itemType}
            />
          );
        })}
      </ul>
    );
  },
  ol: function({ items, classNameLister, classNameList, itemType }: ListProps) {
    return (
      <ol className={classNameLister}>
        {items.map((item) => {
          return (
            <ElementToList
              key={item.toString()}
              item={item}
              classNameList={classNameList}
              itemType={itemType}
            />
          );
        })}
      </ol>
    );
  },
  div: function({ items, classNameLister, classNameList, itemType }: ListProps) {
    return (
      <div className={classNameLister}>
        {items.map((item) => {
          return (
            <ElementToList
              key={item.toString()}
              item={item}
              classNameList={classNameList}
              itemType={itemType}
            />
          );
        })}
      </div>
    );
  },
};

export default Lister;
