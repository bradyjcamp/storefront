import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { asyncGetProducts, displayProduct } from '../../store/products';
import { addToCart } from '../../store/cart'
import { Link } from 'react-router-dom';

function ProductList(){

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart)
  
  const handleAddToCart = (product) => {
   let action = addToCart(product);
   dispatch(action);
  }

  //may need reworked in store
  const handleDisplayProduct = (id) => {
    let action = displayProduct(id);
    dispatch(action);
  }
  
  useEffect(() => {
    dispatch(asyncGetProducts());
  }, [dispatch]);


  return(
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="products">
      {products.selectedProducts.map(product => (
        <Card sx={{ margin: "10px" }} raised key={product._id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{product.name.toUpperCase()} </Typography>
            <CardActions>
              {!cart.cart.includes(product) && product.inStock > 0 ? 
              <Button onClick={() => handleAddToCart(product)}
              >Add to Cart</Button>:
              <Button disabled> Add to Cart</Button>}
 
              <Button onClick={() => handleDisplayProduct(product._id)}>
                <Link to="/products">
                Product Details
                </Link>
              </Button>

            </CardActions>
          </CardContent>
        </Card>
      ))
      }
    </Box>
  )
}

export default ProductList
