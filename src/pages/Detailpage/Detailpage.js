import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import https from "../../service/api";
import { Rate } from "antd";
import { Radio, Tabs } from "antd";
import List from "../Homepage/Tabmovie/List";
export default function Detailpage() {
  let { maPhim } = useParams();
  const [detail, setDetail] = useState();
  const [dsHeThongRap, setDsHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(detail);
  // useEffect(() => {
  //   https
  //     .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
  //     .then((res) => {
  //       console.log(res);
  //       setDsHeThongRap(res.data.content);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const onChange = (key) => {
    console.log(key);
  };

  // const items = dsHeThongRap.map((heThongRap) => {
  //   return heThongRap.lstCumRap.map((lstCumRap) => {
  //     return lstCumRap.danhSachPhim.map((phim) => {
  //       console.log(maPhim);
  //       if (phim.maPhim !== maPhim) {
  //         return {
  //           key: heThongRap.tenHeThongRap,
  //           label: <img className="w-16" src={heThongRap.logo}></img>,
  //           children: "",
  //         };
  //       }
  //     });
  //   });
  // });
  // console.log(items);
  return (
    <div>
      <div className="container flex items-center space-x-5">
        <img
          className="w-64 h-96 rounded shadow-lg shadow-red-600"
          src={detail?.hinhAnh}
        ></img>
        <div className="space-x-5">
          <h1 className="text-3xl font-medium">{detail?.tenPhim}</h1>
          <p>{detail?.moTa}</p>
          <Rate
            allowHalf
            value={detail?.danhGia / 2}
            style={{ color: "red" }}
          ></Rate>
        </div>
      </div>
      {/* <Tabs
        style={{ height: 600 }}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        tabPosition="left"
      /> */}
    </div>
  );
}
