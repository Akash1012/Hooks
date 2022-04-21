import React from "react";

import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Button,
} from "antd";
import "antd/dist/antd.css";
import "./styless.css";

const Notification = () => {
  const [show, setShow] = React.useState([1, 2, 3, 4, 5, 6, 78]);

  const toggle = () => {
    setShow(true);
  };
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <br />
      <div className="box">
        <h2 className="notif">Notifications</h2>
        <hr />

        {show.map((item) => {
          return (
            <>
              <div className="main">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src="https://images.unsplash.com/photo-1650252786836-a7c917c01a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                />
                <div className="title">
                  <span>
                    <strong>Ravindra.kumar mentioned you 5 days ago</strong>
                  </span>
                  <p>
                    @akash.gupta Still not fixed. ![](Screen Recording
                    2022-04-14 at 5.22.01 PM.mov)
                  </p>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Notification;
