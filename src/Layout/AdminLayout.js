import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";

function AdminLayout({ children }) {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}></Header>
      <Layout style={{ flexDirection: "row" }}>
        <Sider style={{ backgroundColor: "white" }} width="270"></Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
