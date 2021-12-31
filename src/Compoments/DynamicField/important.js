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
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
      mark: true,
    });
  };

  const onSubmit = (e) => {
    const { save } = props;
    e.preventDefault();
    save(inputFields);
    setInputFields({
      userFirstname: "",
      userLastname: "",
      userPhone: "",
    });
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
    setSaveData1(saveData);
  }, [saveData]);

  console.log("Set", saveData1);

  const changeInputField = (event, index) => {
    let items = [...saveData1];
    // 2. Make a shallow copy of the item you want to mutate
    let item = { ...items[index] };
    // 3. Replace the property you're intested in
    // debugger;
    item[event.target.name] = event.target.value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to our new copy
    // console.log("Items", items);
    setSaveData1(items);
  };

  const changeData = (index) => {
    console.log("Index", index);
    let items = [...saveData1];
    let item = { ...items[index] };
    item["mark"] = !item.mark;
    items[index] = item;
    setSaveData1(items);
    console.log("Items", items);
  };
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
          <th style={style.tableCell}>Edit</th>
        </tr>
        {saveData1?.map((data, index) => (
          <tr key={index}>
            <td style={style.tableCell}>
              {data.mark ? (
                data.userFirstname
              ) : (
                <input
                  type="text"
                  // disabled={data.mark}
                  name="userFirstname"
                  value={data.userFirstname}
                  onChange={(e) => changeInputField(e, index)}
                />
              )}
            </td>
            <td style={style.tableCell}>
              {data.mark ? (
                data.userLastname
              ) : (
                <input
                  style={style.form.inputs}
                  className="userLastname"
                  name="userLastname"
                  disabled={data.mark}
                  type="text"
                  value={data.userLastname}
                  onChange={(e) => changeInputField(e, index)}
                />
              )}
            </td>
            <td style={style.tableCell}>
              {" "}
              {data.mark ? (
                data.userPhone
              ) : (
                <input
                  style={style.form.inputs}
                  className="userPhone"
                  name="userPhone"
                  value={data.userPhone}
                  type="text"
                  onChange={(e) => changeInputField(e, index)}
                />
              )}
            </td>
            <td style={style.tableCell}>
              <button
                type="button"
                disabled={false}
                onClick={() => changeData(index)}
              >
                {data.mark ? "Re-assign" : "Submit"}
              </button>
            </td>
          </tr>
        ))}
      </thead>
    </table>
  );
}

function Application(props) {
  const [saveData, setSaveData] = React.useState([]);
  const save = (data) => {
    setSaveData([...saveData, data]);
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
