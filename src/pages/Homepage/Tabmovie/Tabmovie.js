import React, { useEffect, useState } from "react";
import https from "../../../service/api";
import List from "./List";
import { Radio, Tabs } from "antd";
export default function Tabmovie() {
  const [dsHeThongRap, setDsHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
      .then((res) => {
        console.log(res);
        setDsHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const items = dsHeThongRap.map((heThongRap) => {
    return {
      key: heThongRap.tenHeThongRap,
      label: <img className="w-16" src={heThongRap.logo}></img>,
      children: (
        <Tabs
          style={{ height: 600 }}
          tabPosition="left"
          items={heThongRap.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.maCumRap,
              label: (
                <div
                  className="text-left w-64 truncate"
                  style={{ height: 600 }}
                >
                  <h2 className="font-medium">{cumRap.tenCumRap}</h2>
                  <p>{cumRap.diaChi}</p>
                </div>
              ),
              children: <List dsPhim={cumRap.danhSachPhim} />,
            };
          })}
        />
      ),
    };
  });
  return (
    <div>
      <Tabs
        style={{ height: 600 }}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        tabPosition="left"
      />
    </div>
  );
}
