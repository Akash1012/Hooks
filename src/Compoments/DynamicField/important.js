import React, { useState } from "react";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm(props) {
  const [inputFields, setInputFields] = React.useState({
    userFirstname: "",
    userLastname: "",
    userPhone: "",
  });

  const handleChangeInput = (index, event) => {
    // const values = [...inputFields];
    console.log(event.target.name);
    // values[index][event.target.name] = event.target.value
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
    // setInputFields(values)
    // console.log("Value", inputFields);
  };

  const onSubmit = (e) => {
    const { save } = props;
    e.preventDefault();
    save(inputFields);
    // setData([...data,[e.target.name] = e.target.name])
    setInputFields({
      userFirstname: "",
      userLastname: "",
      userPhone: "",
    });
    console.log("Submit Data", inputFields);
  };
  return (
    <form onSubmit={onSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        value={inputFields.userFirstname}
        type="text"
        onChange={(event) => handleChangeInput(0, event)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={inputFields.userLastname}
        onChange={(event) => handleChangeInput(0, event)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        value={inputFields.userPhone}
        type="text"
        onChange={(event) => handleChangeInput(0, event)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable(props) {
  const { saveData } = props;
  const [saveData1, setSaveData1] = useState([]);
  React.useEffect(() => {
    console.log("Hello World");
    setSaveData1(saveData);
  }, [saveData]);

  const changeInputField = (event, index) => {
    const values = [...saveData1];
    values[index][event.target.name] = event.target.value;
    setSaveData1(values);
    console.log("Value", values);
  };
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {saveData1?.map((data, index) => (
          <tr key={index}>
            <td style={style.tableCell}>
              {data.userFirstname}
              <input
                type="text"
                name="userFirstname"
                value={data.userFirstname}
                onChange={(e) => changeInputField(e, index)}
              />
            </td>
            <td style={style.tableCell}>{data.userLastname}</td>
            <td style={style.tableCell}>{data.userPhone}</td>
          </tr>
        ))}
      </thead>
    </table>
  );
}

function Application(props) {
  const [saveData, setSaveData] = React.useState([]);
  const save = (data) => {
    setSaveData([...saveData, { ...data }]);
    console.log(saveData);
  };
  return (
    <section>
      <PhoneBookForm save={save} />
      <InformationTable saveData={saveData} />
    </section>
  );
}

export default Application;
