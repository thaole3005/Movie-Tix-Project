import { Layout, Menu } from "antd";
import { Fragment, useEffect, useState } from "react";
import { Content} from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import Header from '../../templates/HomeTemplate/Layout/Header/Header';
import {
  
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from 'antd';
import { NavLink,  useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LayDanhSachPhimAction } from './../../redux/actions/QuanLyPhimActions';

function AdminLayout({ children }) {
  let {pathname} = useLocation();
  // console.log("pathname", pathname)

  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const { SubMenu } = Menu;

  const inputSearchChange = (e) => {
    console.log("search Value", e.target.value);
    if(pathname === "/admin/films") {
      //search ở trang phim
      dispatch(LayDanhSachPhimAction(e.target.value.trim()));
    }
  }

  return (

  <div className="admin_layout">

  <Header/>
    <Layout className="antd_layout">
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />} >
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
                
              </Menu.Item>

              {/* <Menu.Item key="1" icon={<UserOutlined />}>
                  <NavLink to="/admin/users">Users</NavLink>
              </Menu.Item> */}

              <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                  <Menu.Item key="2" icon={<UserOutlined />}>
                      <NavLink to="/admin/users">Users</NavLink>
                  </Menu.Item>
                  
                  <Menu.Item key="3" icon={<UserOutlined />}>
                      <NavLink to="/admin/users/addnewuser">Add New User</NavLink>
                  </Menu.Item>
              
              </SubMenu>

              <SubMenu key="sub2" icon={<FileOutlined />} title="Films">
                  <Menu.Item key="4" icon={<FileOutlined />}>
                      <NavLink to="/admin/films">Films</NavLink>
                  </Menu.Item>
                  
                  <Menu.Item key="5" icon={<FileOutlined />}>
                      <NavLink to="/admin/films/addnewfilm">Add New Films</NavLink>
                  </Menu.Item>
              
              </SubMenu>
            
              {/* <Menu.Item key="5" icon={<DesktopOutlined />}>
                  <NavLink to="/admin/films/showtimes/:id">Showtime</NavLink>
              </Menu.Item> */}
            </Menu>
          </Sider>

          <Content>
              <div className="layout_content">
                <div className="clearfix">
                  <Input size="large" placeholder="Search" style={{width: 300}} className="admin_search_input" onChange ={inputSearchChange}/>
                </div>
                {children}
              </div>
     
          </Content>
      </Layout>

      
    </div>
  );
}

export default AdminLayout;
