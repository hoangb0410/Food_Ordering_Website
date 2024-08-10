import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import CustomerRoute from "./routers/CustomerRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/state/authentication/Action";
import { findCart } from "./components/state/cart/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CustomerRoute />
      </ThemeProvider>
    </>
  );
}

export default App;
