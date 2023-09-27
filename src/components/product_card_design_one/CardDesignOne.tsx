import { hambuger } from "assets";
import React from "react";
import { CardBody, CardDesignOneStyle, CardImg, Typo, fontWeight } from "theme";

type CardOneProps = {
  img?: string;
  menu_name: string;
  price: number | string;
  className?: string;
};

export const CardOne: React.FC<CardOneProps> = ({
  img,
  menu_name,
  price,
  className,
}) => {
  return (
    <CardDesignOneStyle>
      <CardImg src={img} className={className} />
      <CardBody>
        <Typo $font_color="primary" $size={14} $weight="lg">
          {menu_name}
        </Typo>
        <div className="my-2"></div>
        <Typo $font_color="primary" $size={16} $weight="md" $marginBlock={10}>
          {Number(price).toFixed(0)}
        </Typo>
      </CardBody>
    </CardDesignOneStyle>
  );
};
