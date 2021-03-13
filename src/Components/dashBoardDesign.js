import React, { Fragment, Component } from "react";
import "../Pages/style.scss";
import { Menu, Avatar } from "antd";
import Sider from "./navSubMenu";
import {
  UserOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  DropboxOutlined,
  SketchOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  TeamOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";

const { SubMenu } = Menu;

class DashBoardDesign extends Component {
  constructor(props) {
    super(props);
    this.state = { current: "mail", visible: false, placement: "left" };
  }

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { current, placement, visible } = this.state;
    return (
      <Fragment>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="SubMenu1" icon={<DashboardOutlined />}>
            <a href="/dashboard">Dashbord</a>
          </Menu.Item>

          <SubMenu key="SubMenu2" icon={<ShoppingCartOutlined />} title="Nav1">
            <SubMenu key="sub1" title="Option" icon={<ShoppingCartOutlined />}>
              <Menu.Item key="1">sub-option</Menu.Item>
              <Menu.Item key="2">sub-option</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="SubMenu3" icon={<DropboxOutlined />} title="Nav2">
            <SubMenu key="sub2" title="Option" icon={<ShoppingCartOutlined />}>
              <Menu.Item key="3">sub-option</Menu.Item>
              <Menu.Item key="4">sub-option</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="SubMenu4" icon={<SketchOutlined />} title="Nav3">
            <SubMenu key="sub3" title="Option" icon={<TeamOutlined />}>
              <Menu.Item key="5">sub-option</Menu.Item>
              <Menu.Item key="6">sub-option</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="SubMenu5" icon={<CalculatorOutlined />} title="Nav4">
            <SubMenu key="sub4" title="Option" icon={<AccountBookOutlined />}>
              <Menu.Item key="7">sub-option</Menu.Item>
              <Menu.Item key="8">sub-option</Menu.Item>
              <Menu.Item key="9">sub-option</Menu.Item>
            </SubMenu>
          </SubMenu>

          <SubMenu key="SubMenu6" icon={<FileTextOutlined />} title="Nav5">
            <SubMenu key="sub5" title="Option" icon={<TeamOutlined />}>
              <Menu.Item key="10">sub-option</Menu.Item>
              <Menu.Item key="11">sub-option</Menu.Item>
              <Menu.Item key="12">sub-option</Menu.Item>
              <Menu.Item key="13">sub-option</Menu.Item>
              <Menu.Item key="14">sub-option</Menu.Item>
            </SubMenu>
          </SubMenu>

          <SubMenu
            key="profile"
            icon={
              <Avatar
                shape="round"
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined className="icon" />}
              />
            }
            title=" Account"
            style={{ float: "right" }}
          >
            <Menu.ItemGroup>
              <Menu.Item key="15">Setting</Menu.Item>
              <Menu.Item key="16">Log Out</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Fragment>
    );
  }
}

export default DashBoardDesign;
