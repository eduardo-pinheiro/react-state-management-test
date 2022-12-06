import { useRecoilState } from "recoil";
import { IItem } from "../../../../types";
import itemAtom from "./atom";

const useItem = (itemId: number) => useRecoilState<IItem | null>(itemAtom(itemId));
export default useItem;
