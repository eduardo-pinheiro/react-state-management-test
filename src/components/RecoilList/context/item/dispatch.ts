import { useRecoilCallback } from "recoil";
import { IItem } from "../../../../types";
import itemAtom from "./atom";

const useItemDispatch = (itemId: number) => {
  return useRecoilCallback(({ set }) => (payload: IItem | null) => {
    set(itemAtom(itemId), () => payload);
  }, []);
};

export default useItemDispatch;
