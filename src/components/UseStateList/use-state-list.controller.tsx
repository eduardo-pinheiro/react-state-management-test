import React, { useState, useCallback, useEffect } from 'react';
import UseStateListView from './use-state-list.view';
import IUseStateList from './use-state-list.props';
import { IItem } from '../../types';

const UseStateList: React.FC<IUseStateList> = (props) => {
  const {
    itemsArray,
  } = props;

  const [items, setItems] = useState(itemsArray);
  const [activeItem, setActiveItem] = useState<IItem | null>(null);

  useEffect(() => setItems(itemsArray), [itemsArray]);

  const handleChangeLabel = useCallback((text: string, itemId: number) => {
    const newItems = [...items];
    const itemToChange = newItems.find(item => item.id == itemId);
    if (itemToChange) {
      itemToChange.label = text;
      setItems(newItems);
    }
  }, [items]);

  return (
    <UseStateListView
      itemsArray={itemsArray}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      onChangeLabel={handleChangeLabel}
    />
  );
};

export default UseStateList;
