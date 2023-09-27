import { hambuger } from "assets";
import React, { useState, useEffect } from "react";
import { Preloader, rest_service_operation } from "services";
import { useApiStore, useMenuStore } from "store";
import { motion } from "framer-motion";
import { Header, Shop } from "components";
import { Element, animateScroll as scroll } from "react-scroll";

import { RepresentMenu } from "./RepresentMenu";
import { RepresentPopular } from "./RepresentPopular";
import { useQuery } from "@tanstack/react-query";
import { menus } from "domains";
import { Typo } from "theme";

type RepresentMenuProps = {
  data: any;
};

// const variants = {
//   hidden: { opacity: 0, x: 10 },
//   visible: (i: number) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       ease: "easeOut",
//       duration: 0.5,
//       delay: Math.floor(Math.random() * 5) * 0.1,
//     },
//   }),
//   exit: { opacity: 0, x: 10 },
// };

const MenuPage = () => {
  const { changeMenuIndex, currentCategoryIndex } = useMenuStore();
  const { shop_info } = useApiStore();
  const { data, isLoading, isError } = useQuery(
    ["menus_items"],
    () =>
      rest_service_operation({
        endPoint: menus,
      }),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retry: 3,
    }
  );

  // const [detail, setDetail] = useState<any>();
  const [active, setActive] = useState<boolean>(false);

  console.log("Menu Items from Menu Page is  >>>>>>>>>", data);

  //Header Active and InActive
  useEffect(() => {
    const handleScroll = () => {
      var total_scroll_height = document.documentElement.scrollTop;
      let passed_header: boolean;
      if (shop_info.display_images[1]?.image == undefined) {
        passed_header = total_scroll_height >= 200;
      } else {
        passed_header = total_scroll_height >= 400;
      }
      console.log(total_scroll_height);
      if (passed_header) {
        setActive(true);
      } else {
        setActive(false);
        changeMenuIndex(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const change_indicator_first_category = () => {
  //   scroll.scrollToTop();
  //   changeMenuIndex(0);
  // };

  //End Scroll to Top
  // const showDetail_func = (menu: any) => {
  //   setDetail(menu);
  //   setActive(true);
  // };

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return (
      <Typo $size={28} $weight="600" $font_color="primary">
        Sorry!. Try again...
      </Typo>
    );
  }

  return (
    <>
      {active ? <Header categories={data} /> : null}
      <Shop />

      {/* Scroll To Top Button */}
      {/* <div
        className={`content my_animation_appear ${top ? "" : "opacity-0"}`}
        style={{ position: "fixed", bottom: "5%", right: "3%", zIndex: 99 }}
      >
        <a
          className="back-to-top-icon back-to-top-icon-circle bg-dark color-white shadow-m"
          onClick={() => change_indicator_first_category()}
        >
          <i className="fa fa-angle-up"></i>
        </a>
      </div> */}

      <div className="container" style={{ transform: "translateY(-50px)" }}>
        {/* <div className="row mb-0">
          <h1>Popular</h1>
          <div className="col-6 pe-0">
            <div className="card card-style">
              <img src={hambuger} className="img-fluid" />
              <div className="content">
                <h2>Salmon Sashimi</h2>
                <p className="mb-n1 color-highlight font-600">13500</p>
              </div>
            </div>
          </div>
          <div className="col-6 ps-0">
            <div className="card card-style">
              <img src="images/pictures/22.jpg" className="img-fluid" />
              <div className="content pb-0">
                <p className="mb-n1 color-highlight font-600">Column</p>
                <h1>2 of 2</h1>
                <p>
                  This is a full width content. It only has 1 column per row.
                  All contents are styled like this by default
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* {represent_menu} */}

        <RepresentPopular popular={data[currentCategoryIndex].categories[0]} />
        <RepresentMenu menu_items={data[currentCategoryIndex].categories} />

        {/* {handel_loop} */}
        {/* <div
          className={`menu-hider ${active ? "menu-active" : ""}`}
          onClick={() => setActive(false)}
        ></div>
        <div
          id="menu-share"
          className={`menu menu-box-bottom rounded-m ${
            active ? "menu-active" : ""
          }`}
          style={{ height: "600px" }}
          data-menu-effect="menu-over"
        >
          <img
            src={hambuger}
            alt="hambuger"
            style={{ height: "250px", width: "100%", objectFit: "cover" }}
          />

          <div className="menu-title">
            <h1>{detail?.name}</h1>
          </div>
          <div className="divider divider-margins mb-0" />
          <div className="content mt-0">
            <div className="list-group list-custom-small pe-2">
              <div className="d-flex justify-content-between">
                <span className="font-800">Small</span>
                <span className="text-danger font-700"> MMK 2,500</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-800">Medium</span>
                <span className="text-danger font-700"> MMK 4,500</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-800">Large</span>
                <span className="text-danger font-700"> MMK 6,500</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MenuPage;
