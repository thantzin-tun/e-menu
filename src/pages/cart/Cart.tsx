import { hambuger } from "assets";
import React from "react";

export const CartCom = () => {
  return (
    <>
      <div className="page-content">
        <div className="card card-style mb-2">
          <div className="content">
            <div className="d-flex">
              <div>
                <img src={hambuger} className="rounded-sm" width={100} />
              </div>
              <div className="w-100 ms-3 pt-1">
                <h6 className="font-500 font-14 pb-2">
                  Beats by Dre Studio overhead headset
                </h6>
                <h4 className="font-700">
                  $98.<sup>50</sup>
                </h4>
              </div>
            </div>
            <div className="mt-2">
              <div className="stepper rounded-s float-start">
                <a href="#" className="stepper-sub">
                  <i className="fa fa-minus color-theme opacity-40" />
                </a>
                <input type="number" min={1} max={99} defaultValue={1} />
                <a href="#" className="stepper-add">
                  <i className="fa fa-plus color-theme opacity-40" />
                </a>
              </div>
              <a
                href="#"
                className="float-start mt-1 ms-4 font-11 color-theme font-12"
              >
                <i className="fa fa-trash color-red-dark me-1" /> Remove
              </a>
            </div>
          </div>
        </div>
        <div className="card card-style mb-2">
          <div className="content">
            <div className="d-flex">
              <div>
                <img src={hambuger} className="rounded-sm" width={100} />
              </div>
              <div className="w-100 ms-3 pt-1">
                <h6 className="font-500 font-14 pb-2">
                  Beats by Dre Studio overhead headset
                </h6>
                <h4 className="font-700">
                  $98.<sup>50</sup>
                </h4>
              </div>
            </div>
            <div className="mt-2">
              <div className="stepper rounded-s float-start">
                <a href="#" className="stepper-sub">
                  <i className="fa fa-minus color-theme opacity-40" />
                </a>
                <input type="number" min={1} max={99} defaultValue={1} />
                <a href="#" className="stepper-add">
                  <i className="fa fa-plus color-theme opacity-40" />
                </a>
              </div>
              <a
                href="#"
                className="float-start mt-1 ms-4 font-11 color-theme font-12"
              >
                <i className="fa fa-trash color-red-dark me-1" /> Remove
              </a>
            </div>
          </div>
        </div>
        <div className="card card-style mb-2">
          <div className="content">
            <div className="d-flex">
              <div>
                <img src={hambuger} className="rounded-sm" width={100} />
              </div>
              <div className="w-100 ms-3 pt-1">
                <h6 className="font-500 font-14 pb-2">
                  Beats by Dre Studio overhead headset
                </h6>
                <h4 className="font-700">
                  $98.<sup>50</sup>
                </h4>
              </div>
            </div>
            <div className="mt-2">
              <div className="stepper rounded-s float-start">
                <a href="#" className="stepper-sub">
                  <i className="fa fa-minus color-theme opacity-40" />
                </a>
                <input type="number" min={1} max={99} defaultValue={1} />
                <a href="#" className="stepper-add">
                  <i className="fa fa-plus color-theme opacity-40" />
                </a>
              </div>
              <a
                href="#"
                className="float-start mt-1 ms-4 font-11 color-theme font-12"
              >
                <i className="fa fa-trash color-red-dark me-1" /> Remove
              </a>
            </div>
          </div>
        </div>
        <div className="card card-style mb-2">
          <div className="content">
            <div className="d-flex">
              <div>
                <img src={hambuger} className="rounded-sm" width={100} />
              </div>
              <div className="w-100 ms-3 pt-1">
                <h6 className="font-500 font-14 pb-2">
                  Beats by Dre Studio overhead headset
                </h6>
                <h4 className="font-700">
                  $98.<sup>50</sup>
                </h4>
              </div>
            </div>
            <div className="mt-2">
              <div className="stepper rounded-s float-start">
                <a href="#" className="stepper-sub">
                  <i className="fa fa-minus color-theme opacity-40" />
                </a>
                <input type="number" min={1} max={99} defaultValue={1} />
                <a href="#" className="stepper-add">
                  <i className="fa fa-plus color-theme opacity-40" />
                </a>
              </div>
              <a
                href="#"
                className="float-start mt-1 ms-4 font-11 color-theme font-12"
              >
                <i className="fa fa-trash color-red-dark me-1" /> Remove
              </a>
            </div>
          </div>
        </div>
        <div className="card card-style mt-3">
          <div className="content mb-2 mt-3">
            <div className="d-flex">
              <div className="pe-4 w-60">
                <p className="font-600 color-highlight mb-0 font-13">
                  Your Total
                </p>
                <h1>
                  $2798<sup>.00</sup>
                </h1>
              </div>
              <div className="w-100 pt-1">
                <h6 className="font-14 font-700">
                  Shipping
                  <span className="float-end color-green-dark">+$50</span>
                </h6>
                <div className="divider mb-2 mt-1" />
                <h6 className="font-14 font-700">
                  Taxes<span className="float-end color-red-dark">+$0.15</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="close-menu btn btn-margins btn-full gradient-blue font-13 btn-l font-600 mt-3 rounded-sm"
        >
          Proceed to Checkout
        </a>
        <div data-menu-load="menu-footer.html" />
      </div>
    </>
  );
};
