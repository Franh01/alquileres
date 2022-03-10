import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { red } from "@mui/material/colors";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
  FormHelperText,
} from "@mui/material";
import axios from "axios";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: red[500],
    },
  })
);

export const CreatePublication = ({ title, description }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    title: "",
    description: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/publication", state);
    setState({
      title: "",
      description: "",
    });
  };
  return (
    <div>
      <TextField
        placeholder="Título"
        value={state.title}
        name="title"
        onChange={(e) => handleChange(e)}
      ></TextField>
      <TextField
        placeholder="Descripción"
        value={state.description}
        name="description"
        onChange={(e) => handleChange(e)}
      ></TextField>
      <Button variant="contained" size="large" onClick={(e) => onSubmit(e)}>
        Crear
      </Button>
    </div>
  );
};
