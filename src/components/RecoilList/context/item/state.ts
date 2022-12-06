import { useRecoilState } from "recoil";
import { IItem } from "../../../../types";
import itemByIdAtom from "./atom";

const useItemById = (itemByIdId: number) => useRecoilState<IItem | null>(itemByIdAtom(itemByIdId));
export default useItemById;
