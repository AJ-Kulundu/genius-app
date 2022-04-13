import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { useState } from "react";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const [toggleDark, setToggleDark] = useState(false);
  const themeMode = useTheme();
  const theme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
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
      background: {
        default: toggleDark ? "#303030" : "#fafafa",
      },
    },
  });
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavBar functions={[toggleDark, setToggleDark]} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
