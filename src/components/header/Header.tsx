import { CategoryBarCom } from "components/categoryBar";
import React, { useState, useEffect, memo } from "react";
import { Typo } from "theme";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "store";

type HeaderProps = {
  categories: [];
};

export const Header: React.FC<HeaderProps> = memo(({ categories }) => {
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);
  const { changeCategoryIndex, currentCategoryIndex, changeMenuIndex } =
    useMenuStore();
  //Appear Scroll Button
  const history = useNavigate();

  console.log("Header component is running now");
  //Start Scroll to Top

  const choose_category = (i: number) => {
    changeCategoryIndex(i);
    changeMenuIndex(0);
    setIsShowSideBar(false);
  };

  return (
    <>
      <div
        className="page-title"
        style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.05)", zIndex: 30 }}
      >
        <div className="page-title-fixed d-flex justify-content-between">
          {/* <h1 className="font-30 font-700"></h1> */}
          <Typo $font_color="primary" $size={26} $weight="lg">
            Menus
          </Typo>
          <a
            className="page-title-icon shadow-xl bg-theme color-theme"
            // data-menu="menu-main"
            onClick={() => setIsShowSideBar(!isShowSideBar)}
          >
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>

      {/* <div className="page-title-clear"></div> */}
      <div
        className={`menu-hider ${isShowSideBar ? "menu-active" : ""}`}
        onClick={() => setIsShowSideBar(false)}
      ></div>

      <div
        id="menu-main"
        className={`menu menu-box-left rounded-0 ${
          isShowSideBar ? "menu-active" : ""
        }`}
        data-menu-width="280"
        data-menu-active="nav-welcome"
        data-menu-load="menu-main.html"
      >
        <div>
          <div className="mt-4" />
          <h1 className="menu-divider fs-4">Menus</h1>
          <div className="list-group list-custom-small list-menu">
            <a
              id="nav-welcome"
              className="mb-2"
              onClick={() => history("/e-menu", { replace: true })}
            >
              <i className="fa fa-solid fa-home bg-danger color-white" />
              <span className="fs-6 fw-bold">Home</span>
              <i className="fa fa-angle-left" />
            </a>
          </div>
          <h2 className="menu-divider mt-4">Categories</h2>
          <div className="list-group list-custom-small list-menu">
            {categories.map((item: { name: string }, index: number) => (
              <a onClick={() => choose_category(index)}>
                <Typo $size={18} $font_color="#000">
                  {item.name}
                </Typo>
                <i className="fa fa-angle-right" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Category Bar */}
      <CategoryBarCom menu_categories={categories[currentCategoryIndex]} />
    </>
  );
});
