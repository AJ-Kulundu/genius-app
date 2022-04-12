import React from "react";
import { AppBar, Toolbar, Typography, Switch, Stack, Box } from "@mui/material";
import SearchBar from "./searchBar";

function NavBar({ functions }) {
  const [toggleDark, setToggleDark] = functions;
  return (
    <AppBar position="static" mb={4}>
      <Toolbar border={"1px solid"}>
        <Stack
          direction={"row"}
          border={"1px solid"}
          sx={{ alignItems: "center", justifyContent: "space-evenly" }}
        >
          <Typography>Genius App</Typography>
          {/* <SearchBar /> */}
          <Switch
            label={toggleDark ? "dark" : "light"}
            checked={toggleDark}
            color="secondary"
            onChange={() => setToggleDark(!toggleDark)}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
