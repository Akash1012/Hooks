import React, { useContext, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Table, Input, Button, Popconfirm, Form } from "antd";
const EditableContext = React.createContext(null);

const Youtube = () => {
  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    const data = [];
    for (let index = 0; index < 4; index++) {
      data.push({
        key: `${index}`,
        name: `Name ${index}`,
        address: `Address ${index}`,
      });
    }

    setDataSource(data);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="address">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditingRow(record.key);
                form.setFieldsValue({
                  name: record.name,
                  address: record.address,
                });
              }}
            >
              Edit
            </Button>
            <Button htmlType="submit" type="link">
              Save
            </Button>
          </>
        );
      },
    },
  ];

  const onFinish = (values) => {
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
    setDataSource(updatedDataSource);
    setEditingRow(null);
  };
  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Table columns={columns} dataSource={dataSource} />
      </Form>
    </div>
  );
};

export default Youtube;
