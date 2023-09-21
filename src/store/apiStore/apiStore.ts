import domainUrl from "domains/url";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type ExchangeState = {
  menus: any;
};

type ExchangeAction = {
  fetch_menu: (endPoint: string) => Promise<void>;
};

export const useApiStore = create<ExchangeState & ExchangeAction>()(
  immer<ExchangeState & ExchangeAction>((set) => ({
    menus: [],
    fetch_menu: async (endPoint) => {
      try {
        const responseData = await domainUrl.get(endPoint);
        set({
          menus: responseData.data,
        });
      } catch (error) {
        console.error("Error fetching support countries:", error);
      }
    },
  }))
);
