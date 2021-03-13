import React, { Component } from "react";
import { InboxOutlined } from "@ant-design/icons";

import { Row, Col, Divider, Layout, Card, Button, Upload, message } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadFiles = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col xs={24} sm={24} md={24}>
          <Card
            className="text-center"
            style={{
              marginTop: 10,
              background: "rgb(231 242 253)",
              fontFamily: "sans-serif",
              overflow: "auto",
            }}
            bordered={true}
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UploadFiles;
