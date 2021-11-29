import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actionLogin } from "../../redux/thunk/auth.thunk";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {  isLoading, isLoggedIn, status } = useSelector(
    (state) => state.authReducer
  );

  const handleLoginForm = (values) => {
    const { username, password } = values;
    dispatch(actionLogin({ username, password }));
  };

  useEffect(() => {
    if (!isLoading && !isLoggedIn && status === 'login_fail') {
      message.error("Login Fail");
    } else if (!isLoading && isLoggedIn && status === 200) {
      message.success("Login Success");
      history.push("/");
    }
  }, [history, isLoading, isLoggedIn, status]);

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
            onFinish={handleLoginForm}
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
