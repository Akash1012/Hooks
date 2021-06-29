import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";

const ImageUpload = () => {
  const [image, setImage] = useState([]);
  const [base64, setBase64] = useState([]);
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  function akash(img) {
    console.log("getBase64 calling ....");
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      const newImage = reader.result;
      setBase64([...base64, { newImage }]);
    };
  }

  console.log("base43", base64);
  console.log("aaaaa", image);
  //   value.file.originFileObj.name

  const [store, setStore] = useState([]);
  const handleChange = (info) => {
    console.log("Handle value change");
    let fileList = [...info.fileList];

    fileList = fileList.slice(-2);
    fileList.forEach(function (file, index) {
      let reader = new FileReader();
      reader.onload = (e) => {
        // console.log("e.target.result", e.target.result);

        file.base64 = e.target.result.replace(`data:${file.type};base64,`, "");
      };
      reader.readAsDataURL(file.originFileObj);
    });

    setImage(fileList);
  };

  let data = [];
  const postData = () => {
    console.log("data");

    setStore([
      ...store,
      ...image.map((im) => ({
        url: im.base64,
      })),
    ]);
  };

  console.log("STORE", store);

  return (
    <div>
      <h2>Image Upload</h2>
      <Upload onChange={handleChange} fileList={image}>
        <Button style={{ width: "220px" }} icon={<UploadOutlined />}>
          Click to Upload
        </Button>
      </Upload>
      <button onClick={postData}>Click</button>
    </div>
  );
};

export default ImageUpload;
