import React from "react";
import moment from "moment";
import { NavLink, useNavigate } from "react-router-dom";
export default function List({ dsPhim }) {
  let navigate = useNavigate();
  console.log(dsPhim);
  return (
    <div className="space-y-5 overflow-y-scroll" style={{ height: 600 }}>
      {dsPhim.map((phim, index) => {
        return (
          <div className="flex space-x-5">
            <img className="w-40 h-80 object-cover" src={phim.hinhAnh}></img>
            <div>
              <h2 className="text-medium">{phim.tenPhim}</h2>
              <div className="grid grid-cols-3 gap-5">
                {phim.lstLichChieuTheoPhim.map((item) => {
                  return (
                    <NavLink
                      to={`/booking/${phim}`}
                      className="bg-red-500 px-5 py-2 rounded text-white"
                    >
                      {moment(item.ngayChieuGioChieu).format("DD/mm/yyyy")}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
