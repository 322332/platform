import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
// import { AbcSharp } from "@mui/icons-material";
export default function Counter() {
  const [c, setC] = React.useState(0);
  return (
    <>
      <Typography>{c}</Typography>
      <IconButton>H{/*<AbcSharp />*/}</IconButton>
      <Button onClick={() => setC((prev) => prev + 1)}>Count</Button>
    </>
  );
}
