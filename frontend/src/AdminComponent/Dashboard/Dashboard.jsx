import { Grid } from "@mui/material";
import React from "react";
import MenuTable from "../Menu/MenuTable";
import OrderTable from "../Orders/OrderTable";

const RestaurantDashboard = () => {
  return <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MenuTable/>
      </Grid>
      <Grid item xs={12}>
        <OrderTable/>
      </Grid>
    </Grid>
  </div>;
};

export default RestaurantDashboard;
