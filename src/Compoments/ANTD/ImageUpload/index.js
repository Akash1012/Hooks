import React, { useState } from "react";
import "antd/dist/antd.css";
import { Upload, Button, Modal } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

//   getBase64 = (img, callback) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//   };

const ImageUpload = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "2",
      name: "zast",
      status: "done",
      url: "https://zast-staging.s3.amazonaws.com/msme_certificate/FINA1240JPR_2022-07-01?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOVIP4TNQGEJHHIA%2F20220707%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220707T125811Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=22d5a0fa995419dd6df9f9cab73f233da2f063390ab4e06cd0e7b5f68bbcbf61",
    },
  ]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => {
    console.log("C");
    setPreviewVisible(false);
  };

  const handlePreview = async (file) => {
    console.log("A", file);
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

  console.log("File", fileList);

  return (
    <div>
      <h2>Image Upload</h2>
      <Upload
        action=" http://localhost:3000/"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        maxCount={1}
        onChange={handleChange}
      >
        <Button>Upload</Button>
      </Upload>
      <Modal
        visible={previewVisible}
        // title={previewTitle}
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
    </div>
  );
};

export default ImageUpload;
