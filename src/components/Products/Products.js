import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { asyncGetProducts } from '../../store/products';
import { addToCart } from '../../store/cart'
import { displayProduct } from '../../store/products'

function ProductList(){

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart)
  
  const handleAddToCart = (product) => {
   let action = addToCart(product);
   dispatch(action);
  }

  //may need reworked in store
  // const handleDisplayProduct = (product) => {
  //   let action = displayProduct(product);
  //   dispatch(action);
  // }
  
  useEffect(() => {
    dispatch(asyncGetProducts());
  }, [dispatch]);

  console.log(cart)
 

  return(
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="products">
      {products.selectedProducts.map(product => (
        <Card sx={{ margin: "10px" }} raised key={product._id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{product.name} </Typography>
            <CardActions>
              {!cart.cart.includes(product) ? 
              <Button onClick={() => handleAddToCart(product)}
              >Add to Cart</Button>:
              <Button disabled> Add to Cart</Button>}
              <Button>Product Details</Button>
            </CardActions>
          </CardContent>
        </Card>
      ))
      }
    </Box>
  )
}

export default ProductList
