import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type MenuState = {
  currentMenuIndex: number;
};

type MenuActions = {
  changeMenuIndex: (menu_position_index: number) => void;
};

export const useMenuStore = create<MenuState & MenuActions>()(
  devtools(
    immer<MenuState & MenuActions>((set) => ({
      currentMenuIndex: 0,
      changeMenuIndex: (menu_position_index) => {
        set((state) => {
          state.currentMenuIndex = menu_position_index;
        });
      },
    }))
  )
);
