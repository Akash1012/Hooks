import React, { useState } from "react";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const Image = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },

    {
      uid: "2",
      name: "zast",
      status: "done",
      url: "https://zast-staging.s3.amazonaws.com/msme_certificate/FINA1240JPR_2022-07-01?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOVIP4TNQGEJHHIA%2F20220707%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220707T125811Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=22d5a0fa995419dd6df9f9cab73f233da2f063390ab4e06cd0e7b5f68bbcbf61",
    },
  ]);

  const handleCancel = () => {
    console.log("C");
    setPreviewVisible(false);
  };

  const handlePreview = async (file) => {
    console.log("A");
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    console.log("B");
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default Image;
