import React from "react";
import { Menu } from "antd";
//import '../../../pages/style.scss';
//import StockTable from "./stockTable";
import Table from "./table";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  UnorderedListOutlined,
  FilterOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { Row, Col, Divider, Layout, Card, Button } from "antd";
import DashBoardDesign from "./dashBoardDesign";
import UploadFiles from "./uploadFile";
//import StockAmountValueTable from "./stockAmountValue";
//import { Button } from "bootstrap";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const styles = {
  marginTop: 10,
  background: "rgb(143 215 226)",
  fontFamily: "sans-serif",
  overflow: "hidden",
};

const DashBoard = () => {
  function handleClick(e) {
    console.log("click", e);
  }

  return (
    <div className="container-fluid">
      <DashBoardDesign />

      <div>
        <Layout>
          <Router>
            <Sider
              // style={{ backgroundColor: "white" , position:"absolute" , zIndex:10}}
              className="sidebrExt"
              breakpoint="md"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <Menu theme="white" onClick={handleClick} mode="vertical">
                <SubMenu
                  key="sub6"
                  title="Items"
                  icon={<UnorderedListOutlined />}
                >
                  <Menu.Item key="7">option</Menu.Item>
                  <Menu.Item key="8">
                    <a href="/mproducts">option</a>
                  </Menu.Item>
                  <Menu.Item key="9">option</Menu.Item>
                </SubMenu>
                <Menu.Item key="setting:31" icon={<FilterOutlined />}>
                  <Link to="/table">Tables</Link>
                </Menu.Item>
                <Menu.Item key="setting:32" icon={<ControlOutlined />}>
                  <Link to="/uploadfile">Upload Files</Link>
                </Menu.Item>
              </Menu>
            </Sider>

            <Layout>
              <Header
                className="site-layout-sub-header-background"
                style={{ backgroundColor: "white", padding: 0 }}
              >
                <h2
                  className="text-center"
                  style={{ padding: 5, fontFamily: "ui-sans-serif" }}
                >
                  DashBoard
                </h2>
              </Header>
              <Content
                style={{ margin: "24px 16px 0", backgroundColor: "white" }}
              >
                <Row>
                  <Col xs={24} sm={24} md={24}>
                    <div
                      className="text-center"
                      style={{
                        marginTop: 10,
                        background: "rgb(231 242 253)",
                        fontFamily: "sans-serif",
                        overflow: "auto",
                      }}
                      bordered={true}
                    ></div>
                  </Col>
                </Row>

                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Row>
                    <Col xs={24} sm={24} md={24}>
                      <div
                        className="text-center"
                        style={{
                          marginTop: 10,

                          fontFamily: "sans-serif",
                          overflow: "auto",
                        }}
                        bordered={true}
                      >
                        <Switch>
                          <Route exact path="/table">
                            <Table />
                          </Route>
                        </Switch>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={24} sm={24} md={24}>
                      <div
                        className="text-center"
                        style={{
                          marginTop: 10,

                          fontFamily: "sans-serif",
                          overflow: "auto",
                        }}
                        bordered={true}
                      >
                        <Switch>
                          <Route exact path="/uploadfile">
                            <UploadFiles />
                          </Route>
                        </Switch>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Developed in ©2021 Created by React Developers.
              </Footer>
            </Layout>
          </Router>
        </Layout>
      </div>
    </div>
  );
};

export default DashBoard;
