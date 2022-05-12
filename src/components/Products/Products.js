import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { asyncGetProducts } from '../../store/products';
import { addToCart, removeFromCart } from '../../store/cart'

function ProductList(){
  
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products)
  
  
  const handleAddToCart = (product) => {
   let action = addToCart(product);
   dispatch(action);
  }
  
  const handleRemoveFromCart = (product) => {
    let action = removeFromCart(product);
    dispatch(action);
  }
  
  useEffect(() => {
    dispatch(asyncGetProducts());
  }, [dispatch]);

  console.log(products);
 
  return(
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="products">
      {products.selectedProducts.map(product => (
        <Card sx={{ margin: "10px" }} raised key={product._id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{product.name} </Typography>
            <Typography variant="body2" color="text.secondary">Price: ${product.price}</Typography>
            <Typography variant="body2" color="text.secondary">Inventory: {product.inStock}</Typography>
            <CardActions>
              {product.inStock > 0 ? 
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>:
              <Button disabled> Add to Cart</Button>}
              {cart.itemCounter === 0?
              <Button disabled> Remove from Cart</Button> :
              <Button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</Button>}
            </CardActions>
          </CardContent>
        </Card>
      ))
      }
    </Box>
  )
}




export default ProductList