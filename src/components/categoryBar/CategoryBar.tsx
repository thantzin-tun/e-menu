import React, { useState, useEffect, useRef, memo } from "react";
import { Indicator } from "theme/common/indicator_bar";
import { CategoryBarStyle } from "theme/components";
import { Link } from "react-scroll";
import { useMenuStore } from "store";

type CategoryBarProps = {
  menu_categories: any;
};

export const CategoryBarCom: React.FC<CategoryBarProps> = memo(
  ({ menu_categories }) => {
    const { currentMenuIndex, changeMenuIndex, currentCategoryIndex } =
      useMenuStore();

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
    }, [currentMenuIndex, currentCategoryIndex]);

    //Category Bar Scroll Function
    const category_scroll = () => {
      console.log("Category scroll function is running is running");
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

    console.log("Category components is running");

    return (
      <>
        <CategoryBarStyle ref={category_bar_scroll_ref}>
          <ul>
            {menu_categories.categories.map((menu: any, index: number) => (
              <Link
                key={index}
                to={menu.name}
                smooth={true}
                offset={-180}
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
  }
);
