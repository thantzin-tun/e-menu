import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type MenuState = {
  currentMenuIndex: number;
  currentCategoryIndex: number;
};

type MenuActions = {
  changeMenuIndex: (menu_position_index: number) => void;
  changeCategoryIndex: (category_position_index: number) => void;
};

export const useMenuStore = create<MenuState & MenuActions>()(
  devtools(
    persist(
      immer<MenuState & MenuActions>((set) => ({
        currentMenuIndex: 0,
        currentCategoryIndex: 0,
        changeMenuIndex: (menu_position_index) => {
          set((state) => {
            state.currentMenuIndex = menu_position_index;
          });
        },
        changeCategoryIndex: (category_position_index) => {
          set((state) => {
            state.currentCategoryIndex = category_position_index;
          });
        },
      })),
      {
        name: "current_category",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          currentCategoryIndex: state.currentCategoryIndex,
        }),
      }
    )
  )
);
