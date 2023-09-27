import { hambuger } from "assets";
import { CardOne, CardTwo } from "components";
import React, { memo } from "react";
import { Typo } from "theme";

type RepresentPopularProps = {
  popular?: any;
};

export const RepresentPopular: React.FC<RepresentPopularProps> = memo(
  ({ popular }) => {
    console.log("Popular menu is running", popular);
    return (
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <Typo $font_color="primary" $weight="lg">
            {/* {popular.name} */}
            Popular
          </Typo>
        </div>

        {popular.items.slice(0, 6).map(
          (
            menuItem: {
              name: string;
              instances: any;
              alt_name: string;
              image: string;
            },
            index: number
          ) => {
            if (menuItem.image == "") {
              return (
                <>
                  <div className="col-12 mb-2">
                    <CardTwo
                      img={menuItem.image}
                      price={menuItem.instances[0].price}
                      menu_name={menuItem.name}
                      lang={menuItem.alt_name}
                      index={index}
                    />
                    <div className="divider" key={index}></div>
                  </div>
                  {/* <div className="col-6 mb-2" key={index}>
                    <CardOne
                      img={hambuger}
                      menu_name={menuItem.name}
                      price={menuItem.instances[0].price}
                    />
                  </div>
                  <div className="divider" key={index}></div> */}
                </>
              );
            } else {
              return (
                <div className="col-6 mb-2" key={index}>
                  <CardOne
                    img={menuItem.image}
                    menu_name={menuItem.name}
                    price={menuItem.instances[0].price}
                  />
                </div>
              );
            }
          }
        )}
      </div>
    );
  }
);
