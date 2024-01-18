import React, { useEffect, useState } from "react";
import https from "../../service/api";
import { Card, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
export default function Movielist() {
  let [list, setList] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim")
      .then((res) => {
        console.log(res);
        setList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderMovies = () => {
    return list.map((item) => {
      return (
        <Card
          hoverable
          style={{
            width: 230,
          }}
          cover={<img alt="example" src={item.hinhAnh} />}
        >
          <Tooltip title={item.tenPhim}>
            <Meta title={item.tenPhim} />
          </Tooltip>
          <NavLink
            to={`/detail/${item.maPhim}`}
            className="bg-red-600 px-5 py-2 rounded text-white text-xl font-bold mt-5 text-center block"
          >
            Đặt vé
          </NavLink>
        </Card>
      );
    });
  };
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
      {renderMovies()}
    </div>
  );
}
