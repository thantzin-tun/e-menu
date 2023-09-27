import domainUrl from "domains/url";
import { handel_endPoint } from "services";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type ExchangeState = {
  shop_info: {
    name: string;
    city: string;
    address: string;
    phone_no: string;
    display_images: {
      image: string;
    }[];
  };
};

type ExchangeAction = {
  get_shop_info: (endPoint: string) => Promise<void>;
};

export const useApiStore = create<ExchangeState & ExchangeAction>()(
  persist(
    immer<ExchangeState & ExchangeAction>((set) => ({
      shop_info: {
        name: "",
        city: "",
        address: "",
        phone_no: "",
        display_images: [],
      },
      //Get Shop_info
      get_shop_info: async (endPoint) => {
        try {
          const responseData = await domainUrl.get(endPoint);
          set({
            shop_info: responseData.data,
          });
          return responseData.data;
        } catch (error) {
          console.error("Error fetching menu categories >>>>>>>", error);
        }
      },
    })),
    {
      name: "current_shop_info",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        shop_info: state.shop_info,
      }),
    }
  )
);
