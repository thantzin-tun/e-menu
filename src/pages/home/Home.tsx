import React, { useEffect } from "react";
import { hambuger } from "assets";
import { CardOne, CardTwo, Header } from "components";
import { useApiStore } from "store";
import { Typo } from "theme";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetch_menu, menus } = useApiStore();
  return (
    <>
      <Header />
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
      <div className="page-content">
        <div className="card card-style">
          <div className="content mb-0">
            <Typo $font_color="primary" $weight="lg" $letterSpacing={0}>
              Choose your categories
            </Typo>
            <div className="divider mb-0" />
            <div className="list-group list-custom-small list-icon-0">
              <Link to="/e-menu/menu" data-menu="menu-share">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Breakfast
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/e-menu/menu" data-menu="menu-share-thumbs">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  Special Lunch
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
              <Link to="/e-menu/menu" data-menu="menu-call">
                <Typo $weight="lg" $size={16} $font_color="primary">
                  BBQ
                </Typo>
                <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
        <div data-menu-load="menu-footer.html" />
      </div>
    </>
  );
};

export default HomePage;
