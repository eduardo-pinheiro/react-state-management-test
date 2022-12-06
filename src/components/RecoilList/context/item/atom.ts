import { atomFamily } from 'recoil';
import { IItem } from '../../../../types';

const itemAtom = atomFamily<IItem | null, number>({
  key: 'item-atom-family',
  default: null,
});

export default itemAtom;