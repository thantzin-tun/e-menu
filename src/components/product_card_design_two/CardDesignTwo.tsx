import { food_placeholder, hambuger } from "assets";
import React from "react";
import { CardBodyTwo, CardDesignTwoStyle, CardImgTwo, Typo } from "theme";

type CardTwoProps = {
  img?: string;
  menu_name: string;
  price: number | string;
  lang?: string;
  index: number;
};

const variants = {
  hidden: { opacity: 0, x: 10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: Math.floor(Math.random() * 5) * 0.1,
    },
  }),
  exit: { opacity: 0, x: 10 },
};

export const CardTwo: React.FC<CardTwoProps> = ({
  img,
  menu_name,
  price,
  lang,
  index,
}) => {
  const formattedPrice = typeof price === "string" ? parseInt(price) : price;
  return (
    <CardDesignTwoStyle isImg={img == "" ? false : true}>
      {img == "" ? null : <CardImgTwo src={img} />}
      <CardBodyTwo isImg={img == "" ? false : true}>
        <Typo $font_color="primary" $size={16} $weight="lg">
          {menu_name}
        </Typo>
        <div className="my-1">
          {lang == "" ? null : (
            <Typo $font_color="primary" $size={16} $weight="lg">
              {lang}
            </Typo>
          )}
        </div>
        <Typo $font_color="primary" $size={16} $weight="md">
          {formattedPrice.toFixed(0)}
        </Typo>
      </CardBodyTwo>
    </CardDesignTwoStyle>
  );
};
