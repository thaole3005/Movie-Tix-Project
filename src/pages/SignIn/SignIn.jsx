import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="login-form">
          <h4 className="form-title">
            Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
          </h4>
          <Form
            className="form-detail"
            name="formLogin"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Login
              </Button>
            </Form.Item>

            <Form.Item>
              <Button className="singup" size="large">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
