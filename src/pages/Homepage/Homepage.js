import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import https from "../../service/api";
import Movielist from "./Movielist";
import Tabmovie from "./Tabmovie/Tabmovie";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Homepage() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    https
      .get("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        console.log(res);
        setBanners(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  let bannersRendering = () => {
    return banners.map((item) => {
      return (
        <div>
          <img
            src={item.hinhAnh}
            alt="hinhanh"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Carousel>{bannersRendering()}</Carousel>
      <Movielist />
      <Tabmovie />
    </div>
  );
}
