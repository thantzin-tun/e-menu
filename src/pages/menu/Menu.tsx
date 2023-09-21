import { hambuger } from "assets";
import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Preloader } from "services";
import { data } from "data";
import { useMenuStore } from "store";
import { motion } from "framer-motion";
import { CardOne, CardTwo, CategoryBarCom, Header } from "components";
import { Typo } from "theme";
import { Element, animateScroll as scroll } from "react-scroll";

import { InView, useInView } from "react-intersection-observer";

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
  const { changeMenuIndex } = useMenuStore();
  const [detail, setDetail] = useState<any>();
  const [active, setActive] = useState<boolean>(false);

  //Appear Scroll Button
  const [top, setTop] = useState<boolean>(false);

  //Start Scroll to Top
  useEffect(() => {
    const handleScroll = () => {
      var total_scroll_height = document.documentElement.scrollTop;
      var passed_header = total_scroll_height >= 900;
      console.log("Scrool ps is ", total_scroll_height);
      if (passed_header) {
        setTop(true);
      } else {
        setTop(false);
        changeMenuIndex(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const change_indicator_first_category = () => {
    scroll.scrollToTop();
    changeMenuIndex(0);
  };

  //End Scroll to Top
  const showDetail_func = (menu: any) => {
    setDetail(menu);
    setActive(true);
  };

  const represent_menu = useMemo(() => {
    console.log("Represent menu is running");
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
        {data[1].categories.map((menu: any, index: number) => (
          <div className="row" key={index}>
            <div className="col-12 mb-2">
              <Typo $font_color="primary" $weight="lg" $size={24}>
                {menu.name}
              </Typo>
            </div>
            <div className="col-12">
              <Element name={menu.name}>
                {menu.items.map(
                  (
                    menuItem: { name: string; instances: any },
                    index: number
                  ) => {
                    return (
                      <>
                        <CardTwo
                          img={hambuger}
                          price={menuItem.instances[0].price}
                          menu_name={menu.name}
                          lang="Kane Myint Rice Fired"
                          index={index}
                        />
                        <div className="divider" key={index}></div>
                      </>
                    );
                  }
                )}
              </Element>
            </div>
          </div>
        ))}
      </>
    );
  }, [data[1]]);

  const represent_popular = useMemo(() => {
    console.log("Represent popular is running");
    return (
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <Typo $font_color="primary" $weight="lg">
            Popular
          </Typo>
        </div>
        <div className="col-6 mb-2">
          <CardOne
            img={hambuger}
            menu_name="ကုန့်းမြင့်သာထမင်းကြော်"
            price={15000}
          />
        </div>
        <div className="col-6 mb-2">
          <CardOne
            img={hambuger}
            menu_name="ကုန့်းမြင့်သာထမင်းကြော်"
            price={15000}
          />
        </div>
        <div className="col-6 mb-2">
          <CardOne
            img={hambuger}
            menu_name="ကုန့်းမြင့်သာထမင်းကြော်"
            price={15000}
          />
        </div>
        <div className="col-6 mb-2">
          <CardOne
            img={hambuger}
            menu_name="Chicken Noddle Fired"
            price={15000}
          />
        </div>
      </div>
    );
  }, [data[1]]);

  return (
    <>
      <Header />
      {top ? <CategoryBarCom /> : null}

      <div className="page-content">
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

        <div className="container">
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

          {represent_popular}
          {represent_menu}
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
      </div>
    </>
  );
};

export default MenuPage;
