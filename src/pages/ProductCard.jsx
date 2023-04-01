import React from "react";
import { useDispatch } from "react-redux";
import { incrementCartItem, decrementCartItem } from "../slices/cartSlice";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const onUpdateClose = () => {
    dispatch(incrementCartItem({ product }));
    setCounter(counter + 1);
    setOpen(false);
  };

  const deleteCartItem = () => {
    dispatch(decrementCartItem({ product }));
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <Card
      className="container-card"
      sx={{
        "& .MuiCardMedia-root": {
          width: {
            xs: 250,
            sm: 250,
          },
          height: {
            xs: 140,
            sm: 200,
          },
          marginTop: {
            xs: "60px",
            sm: 0,
          },
          marginBottom: {
            xs: "5px",
          },
          marginLeft: {
            xs: "0",
            sm: "15px",
          },
          padding: {
            xs: 0,
          },
        },
      }}
    >
      <CardActionArea>
        <div className="flex-card">
          <CardMedia
            sx={{}}
            component="img"
            image={product.img_url}
            alt="pizza"
          />
          <CardContent
            sx={{
              paddingTop: {
                xs: 0,
                sm: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 15,
                  sm: 25,
                },
              }}
              gutterBottom
              variant="h5"
              component="div"
              className="flex-veg-nonveg"
            >
              {product.name}
              <span className={product.isVeg ? "veg" : "non-veg"}></span>
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: 10,
                  sm: 20,
                },
                marginBottom: {
                  xs: 0,
                  sm: 5,
                },
              }}
              variant="body2"
              color="text.secondary"
            >
              {product.description}
            </Typography>
            <div className="filter-pizza">
              <Typography
                sx={{
                  fontSize: {
                    xs: 10,
                    sm: 14,
                  },
                }}
                variant="body2"
                className="pizza-price"
              >
                Price: Rs. {product.price}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 10,
                    sm: 14,
                  },
                }}
                variant="body2"
                className="pizza-rating"
              >
                Rating: {product.rating}
              </Typography>
            </div>

            <Typography
              variant="body2"
              className="card-count"
              sx={{
                "& .MuiTypography-root": { margin: "1" },
                marginTop: {
                  xs: 1,
                },
              }}
            >
              <AiOutlinePlus onClick={openModal} className="card-icon" />
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography className="close-btn">
                    <RxCross1 onClick={closeModal} />
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {product.size[0].title}
                  </Typography>
                  <div className="flex-modal">
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label={product.size[0].items[0].size}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label={product.size[0].items[1].size}
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label={product.size[0].items[2].size}
                      />
                    </RadioGroup>
                  </div>

                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {product.toppings[0].title}
                  </Typography>
                  <div className="flex-modal">
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      className="padding"
                    >
                      <input type="checkbox" />
                      <span> {product.toppings[0].items[1].name} </span>
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      className="padding"
                    >
                      <input type="checkbox" />
                      <span> {product.toppings[0].items[2].name} </span>
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      className="padding"
                    >
                      <input type="checkbox" />
                      <span>{product.toppings[0].items[3].name} </span>
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      className="padding"
                    >
                      <input type="checkbox" />
                      <span> {product.toppings[0].items[3].name} </span>
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      className="padding"
                    >
                      <input type="checkbox" />
                      <span> {product.toppings[0].items[4].name}</span>
                    </Typography>
                  </div>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button
                      className="card-count"
                      sx={{
                        color: "green",
                        boxShadow: "2px 4px 4px 4px #beb4b4",
                      }}
                      onClick={onUpdateClose}
                    >
                      Ok
                    </Button>
                  </Typography>
                </Box>
              </Modal>
              <span className="count-num">{counter}</span>
              <AiOutlineMinus onClick={deleteCartItem} className="card-icon" />
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
