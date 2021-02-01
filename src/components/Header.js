import React from "react";
import style from "../styles/Header.module.css";
import Line from "../assets/v1.svg";
import MainSvg from "../assets/MainSvg.svg";

const Header = () => {
  return (
    <div className={style.Main}>
      <div className={style.x}>
        <div className={style.tag}>
          Tired of searching for jobs ?<img src={Line} alt='line' />
        </div>
        <div className={style.content}>
          <span style={{ color: "#EF3C56", fontWeight: "bold" }}>Berry</span>{" "}
          Made it easy for you ! Search your dream job now.
        </div>
        <button className={style.btn}> GET STARTED</button>
      </div>
      <div>
        <img src={MainSvg} alt='main' width='500px' />
      </div>
    </div>
  );
};

export default Header;
