import { createTheme } from "@mui/material/styles";
import { useState } from 'react';


export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffeb3b",
    },
    secondary: {
      main: "#cfd8dc",
    },
    divider: "rgba(0,0,0,0.93)",
    success: {
      main: "#00c853",
    },
    error: {
      main: "#ef5350",
    },
    info: {
      main: "#1e88e5",
    },
  },
});
