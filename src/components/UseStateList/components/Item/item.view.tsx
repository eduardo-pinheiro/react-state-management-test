import React from 'react';
import ItemWrapper from './item.style';

interface IProps {
  label: string;
  onChangeLabel: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemViewNoMemo: React.FC<IProps> = (props) => (
  <ItemWrapper className='item-component'>
    <div className="item">
      <h3>Item <input onChange={props.onChangeLabel} value={props.label} /></h3>
    </div>
  </ItemWrapper>
);

const ItemView = React.memo(ItemViewNoMemo);
export default ItemView;
