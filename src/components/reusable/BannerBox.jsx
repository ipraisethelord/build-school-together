import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import theme from "../../styles/theme";
export default function BannerBox() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Paper
        sx={{
          p: 2,
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
          },
        }}
      >
        <Box  sx={{
            "&:hover": {
              "& h1": {
                color: "white",
              },
              "& p": {
                color: "white",
              },
            },
          }}>
          <Typography variant="banner" component="h1" align="left">
            Behold, I will do a new thing; now it shall spring forth; shall ye
            not know it? I will even make a way in the wilderness, and rivers in
            the desert.
          </Typography>
          <Typography
            variant="body1"
            align="right"
            sx={{ color: "#333", marginRight: "15px" }}
          >
            Isaiah 43:19
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
