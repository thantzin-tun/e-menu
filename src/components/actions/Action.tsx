import React, { useState, useEffect } from "react";

type ActionComProps = {
  action_type: string;
  icon: React.ReactNode;
  show: boolean;
  status: string;
};

export const ActionCom: React.FC<ActionComProps> = ({
  action_type,
  icon,
  show = false,
  status,
}) => {
  return (
    <>
      <div className={`menu-hider ${show ? "menu-active" : ""}`}></div>
      <div
        id={action_type}
        className={`menu menu-box-modal rounded-m ${show ? "menu-active" : ""}`}
        style={{ display: "block", width: "250px", height: "170px" }}
        data-menu-hide={800}
        data-menu-width={250}
        data-menu-height={170}
      >
        <div>
          <h1 className="text-center mt-3 pt-2">{icon}</h1>
          <h3 className="text-center pt-2">{status}</h3>
        </div>
      </div>
    </>
  );
};
