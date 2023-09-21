import React, { useState, useEffect, useRef } from "react";
import { data } from "data";
import { Indicator } from "theme/common/indicator_bar";
import { CategoryBarStyle } from "theme/components";

import { Link } from "react-scroll";
import { useMenuStore } from "store";

import { motion } from "framer-motion";

type CategoryBarProps = {};

export const CategoryBarCom: React.FC<CategoryBarProps> = () => {
  const { currentMenuIndex, changeMenuIndex } = useMenuStore();

  //Code for Indicator and Category Scroll Bar
  const [left, setLeft] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const revealRefs = useRef<any>([]);
  revealRefs.current = [];
  const addListRef = (el: any) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  const category_bar_scroll_ref = useRef<any>(null);

  //For Indicator Bar
  useEffect(() => {
    setLeft(revealRefs.current[currentMenuIndex].offsetLeft);
    setWidth(revealRefs.current[currentMenuIndex].offsetWidth);
    category_scroll();
  }, [currentMenuIndex]);

  //Category Bar Scroll Function
  const category_scroll = () => {
    if (currentMenuIndex == 0 || currentMenuIndex == 1) {
      category_bar_scroll_ref.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    } else {
      const selectedCategory = revealRefs.current[currentMenuIndex];
      const containerWidth = category_bar_scroll_ref.current.offsetWidth;
      const selectedCategoryWidth = selectedCategory.offsetWidth;
      const scrollLeft =
        selectedCategory.offsetLeft -
        (containerWidth - selectedCategoryWidth) / 2;
      category_bar_scroll_ref.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     var total_scroll_height = document.documentElement.scrollTop;
  //     var sticky_header = total_scroll_height >= 10;
  //     if (sticky_header) {
  //       // alert("more than 80");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <CategoryBarStyle ref={category_bar_scroll_ref}>
        <ul>
          {data[1].categories.map((menu: any, index: number) => (
            <Link
              key={index}
              to={menu.name}
              smooth={true}
              offset={-130}
              onClick={() => changeMenuIndex(index)}
            >
              <li
                ref={addListRef}
                className={`${
                  currentMenuIndex == index ? "selected_category" : ""
                }`}
              >
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
        <Indicator
          animate={{ x: left - 20, width: width }}
          transition={{ type: "spring", duration: 0.5 }}
        />
      </CategoryBarStyle>
    </>
  );
};
