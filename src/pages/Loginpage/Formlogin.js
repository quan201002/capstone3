import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import https from "../../service/api";
import { useNavigate } from "react-router-dom";
import userSlice, { setUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
const App = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        // chuyển hướng user về home sau khi đăng nhập thành công
        // đẩy data lên redux
        message.success("Login success");
        navigate("/");
        dispatch(setUser(res.data.content));
        let dataJson = JSON.stringify(res.data.content);
        localStorage.setItem("USER_INFOR", dataJson);
        message.success("Login success");
      })
      .catch((err) => {
        message.success("Login fail");
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tài khoản"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Button className="bg-orange-400" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
