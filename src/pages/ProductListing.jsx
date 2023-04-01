import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../slices/productSlice";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

const url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";

function ProductListing() {
  const [loading, setLoading] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [sortType, setSortType] = useState("RATING");
  const [foodType, setFoodType] = useState("ALL");

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const tempArr = [...res].sort((a, b) => b.rating - a.rating);
        dispatch(addProducts(tempArr));
        setDisplayedProducts(tempArr);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);

    if (e.target.value === "PRICE") {
      const tempArr = [...products].sort((a, b) => a.price - b.price);
      const tempDisplayedArr = [...displayedProducts].sort(
        (a, b) => a.price - b.price
      );
      dispatch(addProducts(tempArr));
      setDisplayedProducts(tempDisplayedArr);
    } else {
      const tempArr = [...products].sort((a, b) => b.rating - a.rating);
      const tempDisplayedArr = [...displayedProducts].sort(
        (a, b) => b.rating - a.rating
      );
      dispatch(addProducts(tempArr));
      setDisplayedProducts(tempDisplayedArr);
    }
  };

  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);

    switch (e.target.value) {
      case "VEG":
        setDisplayedProducts(products.filter((product) => product.isVeg));
        break;

      case "NON-VEG":
        setDisplayedProducts(products.filter((product) => !product.isVeg));
        break;

      default:
        setDisplayedProducts(products);
    }
  };

  if (loading) return <Loader />;
  console.log(products);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Box
          sx={{
            width: {
              xs: 218,
            },
            height: {
              xs: 40,
            },
          }}
        >
          <FormControl fullWidth>
            <div className="flex-filter">
              <div className="filter-margin">
                <InputLabel
                  sx={{
                    padding: {
                      xs: 0,
                    },
                    height: {
                      xs: 20,
                    },
                    fontSize: {
                      sm: 20,
                    },
                  }}
                  id="demo-simple-select-label"
                >
                  Sort
                </InputLabel>
                <Select
                  sx={{
                    width: {
                      sm: 100,
                      xs: 70,
                    },
                    height: {
                      xs: 30,
                      sm: 35,
                    },
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortType}
                  label="Sort"
                  onChange={handleSortTypeChange}
                >
                  <MenuItem value={"RATING"}>RATING</MenuItem>
                  <MenuItem value={"PRICE"}>PRICE</MenuItem>
                </Select>
              </div>
              <div className="filter-margin">
                <Select
                  sx={{
                    width: {
                      xs: 70,
                      sm: 120,
                    },
                    height: {
                      xs: 30,
                      sm: 35,
                    },
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={foodType}
                  label="Sort"
                  onChange={handleFoodTypeChange}
                >
                  <MenuItem value={"ALL"}>All</MenuItem>
                  <MenuItem value={"VEG"}>Veg</MenuItem>
                  <MenuItem value={"NON-VEG"}>Non-Veg</MenuItem>
                </Select>
              </div>
            </div>
          </FormControl>
        </Box>
      </div>

      <div className="container">
        {displayedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ProductListing;
