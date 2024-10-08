import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/state/authentication/Action";
import { findCart } from "./components/state/cart/Action";
import Routers from "./routers/Routers";
import { getRestaurantByUserId } from "./components/state/restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);

  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt));
  }, [auth.user]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
