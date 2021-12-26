import React, { useState } from "react";

import {
  Container,
  TextField,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import { RemoveCircle, AddCircle } from "@material-ui/icons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  space: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Input = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    console.log(inputFields);
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    console.log("Value", values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa", inputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  const handleRemoveFields = (index) => {
    if (inputFields.length > 1) {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    } else {
    }
  };

  const classess = useStyles();
  return (
    <Container>
      <h1>Add New Member</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => {
          return (
            <div key={index} className={classess.space}>
              <TextField
                onChange={(event) => handleChangeInput(index, event)}
                variant="filled"
                name="firstName"
                label="First Name"
                value={inputField.firstName}
              />
              <TextField
                onChange={(event) => handleChangeInput(index, event)}
                variant="filled"
                name="lastName"
                label="Last Name"
                value={inputField.lastName}
              />
              <IconButton onClick={() => handleRemoveFields(index)}>
                <RemoveCircle />
              </IconButton>
              <IconButton onClick={() => handleAddFields()}>
                <AddCircle />
              </IconButton>
            </div>
          );
        })}

        <Button
          onClick={handleSubmit}
          className={classess.button}
          endIcon={<ArrowForwardIosIcon />}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Input;
