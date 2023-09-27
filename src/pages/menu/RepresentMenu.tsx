import { useEffect, useState } from "react";
import { food_placeholder, hambuger } from "assets";
import { CardTwo } from "components";
import React, { memo } from "react";
import { Element } from "react-scroll";
import { Typo } from "theme";
import { InView } from "react-intersection-observer";
import { useMenuStore } from "store";
type RepresentMenuProps = {
  menu_items: any;
};

export const RepresentMenu: React.FC<RepresentMenuProps> = memo(
  ({ menu_items }) => {
    console.log("Represent menu is running");
    const { changeMenuIndex } = useMenuStore();
    const indicator_auto_move = (isView: boolean, index: number) => {
      if (isView) {
        console.log("isView is", isView);
        console.log("Intersection obserber index is ", index);
      }
    };

    return (
      //Old Style Loop
      // <div style={{ marginBottom: "30px" }}>
      //   {data[1].categories.map((menu: any, index: number) => (
      //     <Element
      //       className="card card-style mt-4"
      //       name={menu.name}
      //       key={index}
      //     >
      //       <motion.div style={{ width: "100%", paddingInline: "15px" }}>
      //         <Typo $size="22" $weight={700} $font_color="red" className="mb-2">
      //           {menu.name}
      //         </Typo>
      //       </motion.div>

      //       {menu.items.map(
      //         (menuItem: { name: string; instances: any }, index: number) => {
      //           return (
      //             <>
      //               <motion.div
      //                 key={index}
      //                 whileInView="visible"
      //                 initial="hidden"
      //                 variants={variants}
      //                 exit="exit"
      //                 custom={index}
      //                 viewport={{ once: true }}
      //                 onClick={() => showDetail_func(menuItem)}
      //               >
      //                 <div className="content mb-0">
      //                   <div className="row justify-content-center">
      //                     <div className="col-5 pe-0">
      //                       <img
      //                         src={hambuger}
      //                         alt="menu"
      //                         className="rounded"
      //                         style={{ width: "100%", height: "auto" }}
      //                       />
      //                     </div>
      //                     <div className="col-6 offset-1 d-flex flex-column text-start gap-1">
      //                       <Typo $font_color="footerBackColor" $size="20">
      //                         {menuItem.name}
      //                       </Typo>
      //                       <Typo $font_color="footerBackColor" $size="14">
      //                         1 portion
      //                       </Typo>
      //                       <Typo $font_color="red" $size="16">
      //                         MMK {menuItem.instances[0].price}
      //                       </Typo>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </motion.div>
      //               <div
      //                 className="divider bg-dark divider-margins"
      //                 key={menuItem.name}
      //               ></div>
      //             </>
      //           );
      //         }
      //       )}
      //     </Element>
      //   ))}
      // </div>
      <>
        {menu_items.map((menu: any, index: number) => (
          <div className="row">
            <InView
              onChange={(inView, entry) => {
                if (inView) {
                  // changeMenuIndex(index);
                  console.log("isView is", inView);
                  console.log("Intersection obserber index is ", index);
                } else {
                  return;
                }
              }}
              threshold={0}
            >
              <div className="col-12 mb-2">
                <Typo $font_color="primary" $weight="lg" $size={24}>
                  {menu.name}
                </Typo>
              </div>

              {index == 0 ? (
                <div className="col-12">
                  <Element name={menu.name}>
                    {menu.items.slice(6).map(
                      (
                        menuItem: {
                          name: string;
                          instances: any;
                          alt_name: string;
                          image: string;
                        },
                        index: number
                      ) => {
                        return (
                          <>
                            <CardTwo
                              img={menuItem.image}
                              price={menuItem.instances[0].price}
                              menu_name={menuItem.name}
                              lang={menuItem.alt_name}
                              index={index}
                            />
                            <div className="divider" key={index}></div>
                          </>
                        );
                      }
                    )}
                  </Element>
                </div>
              ) : (
                <div className="col-12">
                  <Element name={menu.name}>
                    {menu.items.map(
                      (
                        menuItem: {
                          name: string;
                          instances: any;
                          alt_name: string;
                          image: string;
                        },
                        index: number
                      ) => {
                        return (
                          <>
                            <CardTwo
                              img={menuItem.image}
                              price={menuItem.instances[0].price}
                              menu_name={menuItem.name}
                              lang={menuItem.alt_name}
                              index={index}
                            />
                            <div className="divider" key={index}></div>
                          </>
                        );
                      }
                    )}
                  </Element>
                </div>
              )}
            </InView>
          </div>
        ))}
      </>
    );
  }
);
