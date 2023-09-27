import React from "react";
import { useApiStore, useMenuStore } from "store";
import { Typo } from "theme";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { useQuery } from "@tanstack/react-query";
import { menus, shopInfo } from "domains";
import { Preloader, rest_service_operation } from "services";
import { styled } from "styled-components";

const HomePage = () => {
  const history = useNavigate();
  const { changeCategoryIndex } = useMenuStore();
  const { get_shop_info, shop_info } = useApiStore();
  const { data, isError, isLoading } = useQuery(
    ["menus"],
    () => rest_service_operation({ endPoint: menus }),
    {
      refetchOnWindowFocus: false,
      staleTime: 500000,
      refetchIntervalInBackground: true,
      refetchOnReconnect: true,
      retry: 3,
    }
  );
  useQuery(["shop"], () => get_shop_info(shopInfo), {
    refetchOnWindowFocus: false,
    staleTime: 500000,
    refetchIntervalInBackground: true,
    refetchOnReconnect: true,
    retry: 3,
  });
  console.log("The response data of menus is >>>>", data);
  console.log("The response data of shop_info is is >>>>", shop_info);
  const goMenu = (i: number) => {
    changeCategoryIndex(i);
    history("/e-menu/menu");
  };
  return (
    <>
      <div className="main_section">
        {isError ? (
          <Typo $size={28} $weight="600" $font_color="primary">
            Sorry!. Try again...
          </Typo>
        ) : isLoading ? (
          <Preloader />
        ) : (
          <>
            {shop_info.display_images[0]?.image == undefined ? null : (
              <img src={shop_info.display_images[0]?.image} />
            )}

            <Typo
              $font_color={`${
                shop_info.display_images[0]?.image == undefined
                  ? "#000"
                  : "#fff"
              }`}
              $weight="lg"
              $size={26}
              $letterSpacing={0}
              style={{ marginBottom: "80px" }}
              $fontFamily="Roboto"
            >
              {shop_info.name.toLocaleUpperCase()}
            </Typo>
            <Typo
              $font_color={`${
                shop_info.display_images[0]?.image == undefined
                  ? "#000"
                  : "#fff"
              }`}
              $weight="lg"
              $size={38}
              $letterSpacing={1}
              $fontFamily="Roboto"
              color="#fff"
            >
              MENUS
            </Typo>
            <div className="divider my-4 px-2"></div>
            <div className="card card-style" style={{ width: "100%" }}>
              {data.map((category: { name: string }, index: number) => (
                <div
                  className="d-flex justify-content-between align-items-center p-3 content_custom"
                  key={index}
                  onClick={() => goMenu(index)}
                >
                  <Typo $font_color="primary" $size={18} $weight="lg">
                    {category.name}
                  </Typo>
                  <i className="fa fa-angle-right text-dark" />
                </div>
              ))}

              {/* <div className="default-link d-flex justify-content-between align-items-center w-full py-3 btn btn-full btn-md bg-dark rounded-s shadow-xl content_custom">
            <a
              className="font-600 text-light"
              onClick={() => history(`/e-menu/menu`, { replace: true })}
            >
              Breakfast
            </a>
            <i className="fa fa-angle-right" />
          </div>
          <div className="default-link d-flex justify-content-between align-items-center w-full py-3 btn btn-full btn-md bg-dark rounded-s shadow-xl content_custom">
            <a
              className="font-600 text-light"
              onClick={() => history(`/e-menu/menu`, { replace: true })}
            >
              Breakfast
            </a>
            <i className="fa fa-angle-right" />
          </div>
          <div className="default-link d-flex justify-content-between align-items-center w-full py-3 btn btn-full btn-md bg-dark rounded-s shadow-xl content_custom">
            <a
              className="font-600 text-light"
              onClick={() => history(`/e-menu/menu`, { replace: true })}
            >
              Breakfast
            </a>
            <i className="fa fa-angle-right" />
          </div>
          <div className="default-link d-flex justify-content-between align-items-center w-full py-3 btn btn-full btn-md bg-dark rounded-s shadow-xl content_custom">
            <a
              className="font-600 text-light"
              onClick={() => history(`/e-menu/menu`, { replace: true })}
            >
              Breakfast
            </a>
            <i className="fa fa-angle-right" />
          </div>
          <div className="default-link d-flex justify-content-between align-items-center w-full py-3 btn btn-full btn-md bg-dark rounded-s shadow-xl content_custom">
            <a
              className="font-600 text-light"
              onClick={() => history(`/e-menu/menu`, { replace: true })}
            >
              Breakfast
            </a>
            <i className="fa fa-angle-right" />
          </div> */}
            </div>
          </>
        )}
      </div>

      {/* <div className="container">
        <div className="row mt-3">
          <Typo $font_color="primary" $weight="lg">
            Popular
          </Typo>
          <div className="col-6 mt-3">
            <CardOne
              img={hambuger}
              menu_name="ကုန့်းမြင့်သာထမင်းကြော်"
              price={15000}
            />
          </div>
          <div className="col-6 mt-3">
            <CardOne
              img={hambuger}
              menu_name="ကုန့်းမြင့်သာထမင်းကြော်"
              price={15000}
            />
          </div>
          <div className="col-6 mt-3">
            <CardOne
              img={hambuger}
              menu_name="ကုန့်းမြင့်သာထမင်းကြော်"
              price={15000}
            />
          </div>
          <div className="col-6 mt-3">
            <CardOne
              img={hambuger}
              menu_name="Chicken Noddle Fired"
              price={15000}
            />
          </div>
        </div>
        <div className="row mt-3">
          <Typo $font_color="primary" $weight="lg">
            Breakfast
          </Typo>
          <div className="col-12">
            <CardTwo
              img={hambuger}
              price={25000}
              menu_name="အုန်းနို့ခေါက်ဆွဲ"
              lang="Kane Myint Rice Fired"
              index={2}
            />
            <div className="px-3">
              <div className="divider"></div>
            </div>
            <CardTwo
              img=""
              price={25000}
              menu_name="အုန်းနို့ခေါက်ဆွဲ"
              lang="Kane Myint Rice Fired"
              index={2}
            />
          </div>
          <div className="px-3">
            <div className="divider"></div>
          </div>
        </div>
      </div> */}
      {/* <div className="page-content">
        <div className="card card-style">
          <div className="content mb-0">
            <div className="multiple_menu_choose_bar">
              <Typo $font_color="primary" $weight="lg" $letterSpacing={0}>
                Choose your categories
              </Typo>
              <div className="divider mb-0" />
            </div>
            <div className="list-group list-custom-small multiple_menu_list list list-icon-0">
              <a onClick={() => history(`/e-menu/menu`, { replace: true })}>
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Breakfast
                </Typo>
                <i className="fa fa-angle-right" />
              </a>
              <Link to="/e-menu/menu">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Special Lunch
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/e-menu/menu">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  BBQ
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/e-menu/menu">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Breakfast
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/e-menu/menu">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Special Lunch
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/e-menu/menu">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Special Lunch
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>

              <Link to="/e-menu/menu">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Special Lunch
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/e-menu/menu">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Special Lunch
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
        <div data-menu-load="menu-footer.html" />
      </div> */}
    </>
  );
};

export default HomePage;
