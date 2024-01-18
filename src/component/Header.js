import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  let { user } = useSelector((state) => state.userSlice);
  let handelLogout = () => {
    localStorage.removeItem("USER_INFOR");
    window.location.reload();
  };
  let renderMenu = () => {
    let cssBtn = "rounded px-5 py-2 border-2 border-black bg-green-500";
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button className={cssBtn} onClick={handelLogout}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className={cssBtn}
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            {" "}
            Đăng nhập
          </button>
          <button
            className={cssBtn}
            onClick={() => {
              window.location.href = "/regist";
            }}
          >
            Đăng ký
          </button>
        </>
      );
    }
  };
  return (
    <div className="" style={{ height: "200px" }}>
      <div className="shadow-lg shadow-black fixed w-full top-0 left-0 z-50 bg-white">
        <div className="flex justify-between items-center container">
          <NavLink to="/">
            <span>
              <img
                src="./logo.png"
                style={{ width: "150px", height: "150px" }}
              ></img>
            </span>
          </NavLink>
          <div className="space-x-5">
            <NavLink to="/">
              <span>Trang chủ</span>
            </NavLink>
            <NavLink to="/">
              <span>Liên hệ</span>
            </NavLink>
            <NavLink to="/">
              <span>Tin tức</span>
            </NavLink>
            <NavLink to="/">
              <span>Ứng dụng</span>
            </NavLink>
          </div>
          <div className="space-x-5">{renderMenu()}</div>
        </div>
      </div>
    </div>
  );
}
