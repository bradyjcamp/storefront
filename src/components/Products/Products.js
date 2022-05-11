import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { addToCart, removeFromCart } from '../../store/cart'

function ProductList({ itemCounter, selectedProducts, addToCart, removeFromCart }){

  // console.log(products);
  console.log(selectedProducts);

  return(
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="products">
      {selectedProducts.map(product => (
        <Card sx={{ margin: "10px" }} raised key={product.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{product.name} </Typography>
            <Typography variant="body2" color="text.secondary">{product.description}</Typography>
            <Typography variant="body2" color="text.secondary">Price: ${product.price}</Typography>
            <Typography variant="body2" color="text.secondary">Inventory: {product.inventory}</Typography>
            <CardActions>
              {product.inventory > 0 ? 
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>:
              <Button disabled> Add to Cart</Button>}
              {itemCounter === 0?
              <Button disabled> Remove from Cart</Button> :
              <Button onClick={() => removeFromCart(product)}>Remove from Cart</Button>}
            </CardActions>
          </CardContent>
        </Card>
      ))
      }
    </Box>
  )
}

const mapStateToProps = ({ products, cart }) => {
  return{
    products: products.products,
    selectedProducts: products.selectedProducts,
    itemCounter: cart.itemCounter
  }
}

const mapDispatchToProps = {
  addToCart,
  removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)