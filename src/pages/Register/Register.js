import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import https from "../../service/api";
const onFinish = (values) => {
  console.log("Success:", values);
  https
    .post("/api/QuanLyNguoiDung/DangKy", values)
    .then((res) => {
      message.success("Logup success");
    })
    .catch((err) => {
      message.success("Tài khoản đã tồn tại");
    });
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Register = () => (
  <Form
    name="basic"
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
      label="Nhập lại mật khẩu"
      name="repmatKhau"
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
      label="Họ tên"
      name="hoTen"
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
      label="Email"
      name="email"
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
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className="bg-red-500">
        Đăng kí
      </Button>
    </Form.Item>
  </Form>
);
export default Register;
