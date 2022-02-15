import React from "react";
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
import "../../index.css";

const originData = [];
const { useState } = React;
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: {
      id: "T120943048 (Closed)",
      value: "HR63E7404 (20 Feet)",
      type: "CCH-CCUN-BZH-DHN",
      date: "22/07/2021",
      pod: "Soft Copy",
    },
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      console.log("Index", index);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        console.log("update data", newData[index]);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
      editable: false,
      render: (_, record) => {
        return (
          <div style={{ height: "167px", marginTop: "6px" }} key={data.id}>
            <div>
              <div>
                <p className="m0 medium font-12">{record.name.id}</p>
                <p className="m0 medium font-12">{record.name.value}</p>
                <p className="m0 regular font-12 ">{record.name?.type}</p>
                <p
                  style={{ marginLeft: "-2px" }}
                  className="m0 regular font-12 "
                >
                  Start Date: {record.name?.date}
                </p>
                <p
                  style={{ marginRight: "30px" }}
                  className="m0 regular font-12 "
                >
                  POD: {record.name?.pod}
                </p>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "age",
      dataIndex: "age",
      width: "15%",
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            {record.age}
          </Typography.Link>
        );
      },
    },
    {
      title: "address",
      dataIndex: "address",
      width: "40%",
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            {record.address}
          </Typography.Link>
        );
      },
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return true ? (
          <span>
            <Button
              disabled={!editable}
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          ""
          //   <Typography.Link
          //     disabled={editingKey !== ""}
          //     onClick={() => edit(record)}
          //   >
          //     Edit
          //   </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EditableTable;
