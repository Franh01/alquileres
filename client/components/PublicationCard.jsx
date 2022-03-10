import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { red } from "@mui/material/colors";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: red[500],
    },
  })
);

export const PublicationCard = ({ title, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" fontWeight="regular">
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </div>
  );
};
