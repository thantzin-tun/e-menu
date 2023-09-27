import { hambuger, hotel } from "assets";
import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { useApiStore } from "store";
import { Card, ImgBackground, InnerCard, Typo } from "theme";
import "./shop_info.scss";

export const Shop: React.FC = () => {
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);
  const { shop_info } = useApiStore();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     var total_scroll_height = document.documentElement.scrollTop;
  //     var passed_header = total_scroll_height >= 80;
  //     if (passed_header) {
  //       secondaryHeaderRef.current.classList.add("header-active");
  //       primaryHeaderRef.current.setAttribute("style", "opacity: 0;");
  //     } else {
  //       secondaryHeaderRef.current.classList.remove("header-active");
  //       primaryHeaderRef.current.setAttribute("style", "opacity: 1;");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  console.log(">>>>>>>>>>>>>>>>>>", shop_info);
  console.log(">>>>>>>>>>>>>>>>>>", shop_info.display_images[1]?.image);
  return (
    <>
      {/* Shop Address Card */}
      {shop_info.display_images[1]?.image == undefined ? null : (
        <Parallax
          bgImage={shop_info.display_images[1]?.image}
          bgImageAlt="shop_address"
          strength={300}
          className="parallax_image"
        ></Parallax>
      )}
      {/* <ImgBackground src={hotel} /> */}
      <Card
        className="ms-0 me-0 rounded-0"
        img={shop_info.display_images[1]?.image}
      >
        <InnerCard>
          <div className="content">
            <h1>{shop_info.name}</h1>

            <div className="list-group">
              <div className="information">
                <div className="col-1">
                  <div className="icon-container bg-danger">
                    <i className="fa fa-location color-white" />
                  </div>
                </div>
                <div className="col ms-3">
                  <Typo
                    $size={15}
                    $weight="600"
                    $font_color="primary"
                    $letterSpacing={0.5}
                  >
                    {shop_info.address}
                  </Typo>
                </div>
              </div>
              <div className="information">
                <div className="col-1">
                  <div className="icon-container bg-primary">
                    <i className="fa fa-phone color-white" />
                  </div>
                </div>
                <div className="col ms-3">
                  <Typo
                    $size={15}
                    $weight="600"
                    $font_color="primary"
                    $letterSpacing={0.5}
                  >
                    {shop_info.phone_no}
                  </Typo>
                </div>
              </div>
              <div className="information">
                <div className="col-1">
                  <div className="icon-container bg-success">
                    <i className="fa fa-city color-white" />
                  </div>
                </div>
                <div className="col ms-3">
                  <Typo
                    $size={15}
                    $weight="600"
                    $font_color="primary"
                    $letterSpacing={0.5}
                  >
                    {shop_info.city}
                  </Typo>
                </div>
              </div>

              {/* <a href="">
                <i className="fa font-14 fa-location bg-danger rounded-xl shadow-xl color-white" />
                <span>{shop_info.address}</span>
              </a>
              <a href="">
                <i className="fa font-14 fa-phone bg-primary rounded-xl shadow-xl color-white" />
                <span>{shop_info.phone_no}</span>
              </a>
              <a href="">
                <i className="fa font-14 fa-city bg-success rounded-xl shadow-xl color-white" />
                <span>{shop_info.city}</span>
              </a> */}
            </div>
          </div>
        </InnerCard>
      </Card>
    </>
  );
};
