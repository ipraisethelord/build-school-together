import  React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function VisionAndMissionPaper({ item, content }) {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let boxWidth = "300px";
  let boxPadding = 2;
  let font = "h5";

  if (isMediumScreen) {
    boxWidth = "400px";
    boxPadding = 3;   
    font ="h3"
  }

  if (isLargeScreen) {
    boxWidth = "500px";
    boxPadding = 4;
   
    font="h2"
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          p: boxPadding,
          width: boxWidth,
          height: "auto",
        },
      }}
    >
      <Paper elevation={3} sx={{ backgroundColor: alpha("#f0fff0", 0.5), textAlign: "center" }}>
        <Typography variant="h2">{item}</Typography>
        <Typography align="left">{content}</Typography>
      </Paper>
    </Box>
  );
}
