import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { addToCart } from '../../store/cart'
import { Link } from 'react-router-dom';


function ProductDetails(){

  const dispatch = useDispatch()
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart)

  const handleAddToCart = (product) => {
    let action = addToCart(product);
    dispatch(action);
   }

  return(
    <>
    {products.productSelected.length ?
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="products">
      <Card sx={{ margin: "10px" }} raised key={products.productSelected[0]._id}>
        <CardContent>
          <Typography gutterBottom variant="h3">{products.productSelected[0].name} </Typography>
          <Typography gutterBottom variant="h5">PRODUCT DETAILS </Typography>
          <Typography variant="body2" color="text.secondary">Price: ${products.productSelected[0].price}</Typography>
          <Typography variant="body2" color="text.secondary">Inventory: {products.productSelected[0].inStock}</Typography>
          <CardActions>
          {!cart.cart.includes(products.productSelected[0]) && products.productSelected[0].inStock > 0 ? 
          <Button onClick={() => handleAddToCart(products.productSelected[0])}>
              <Link to="/checkout">BUY</Link>
          </Button> :
          <Button disabled> ITEM IN CART ALREADY or OUT OF STOCK</Button>}
          <Button>
            <Link to="/">BACK</Link>
          </Button>
          </CardActions>
        </CardContent>
      </Card>
  </Box>
   : null }
   </>
 )
}

export default ProductDetails