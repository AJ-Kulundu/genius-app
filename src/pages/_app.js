import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import { useState } from 'react';
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const [toggleDark,setToggleDark] = useState(true);
  const theme = createTheme({
    palette: {
      type: toggleDark ? 'dark':'light',
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
  console.log(toggleDark)
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavBar functions={[toggleDark,setToggleDark]}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
