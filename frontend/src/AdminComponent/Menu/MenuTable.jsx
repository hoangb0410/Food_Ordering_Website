import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFoodAction,
  getMenuItemsByRestaurantId,
} from "../../components/state/menu/Action";

const orders = [1, 1, 1, 1, 1];

const MenuTable = () => {
  const dispatch = useDispatch();
  const { restaurant, ingredients, menu } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        jwt,
        restaurantId: restaurant.usersRestaurant.id,
        vegetarian: false,
        nonveg: false,
        seasonal: false,
        foodCategory: "",
      })
    );
  }, []);

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFoodAction({ foodId, jwt }));
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          action={
            <IconButton
              onClick={() => navigate("/admin/restaurant/add-menu")}
              aria-label="settings"
            >
              <CreateIcon />
            </IconButton>
          }
          title={"Menu"}
          sx={{ pt: 2, alignItems: "center" }}
        />
        <CardActions />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.menuItems.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={item.images[0]}></Avatar>
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">
                    {item.ingredients.map((ingredient) => (
                      <Chip label={ingredient.name} />
                    ))}
                  </TableCell>
                  <TableCell align="right">{item.price}VND</TableCell>
                  <TableCell align="right">
                    {item.available ? "In Stock" : "Out Of Stock"}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="primary"
                      onClick={() => handleDeleteFood(item.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default MenuTable;
