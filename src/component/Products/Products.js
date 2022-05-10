import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ProductList({ selectedProducts }){

  // console.log(products);
  console.log(selectedProducts);

  return(
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="products">
      {selectedProducts.map(product => (
        <Card sx={{ margin: "10px" }} raised key={product.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{product.name} </Typography>
            <Typography variant="body2" color="text.secondary">{product.description}</Typography>
            <Typography variant="body2" color="text.secondary">{product.price}</Typography>
            <Typography variant="body2" color="text.secondary">{product.inventory}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

const mapStateToProps = ({ products }) => {
  return{
    products: products.products,
    selectedProducts: products.selectedProducts
  }
}


export default connect(mapStateToProps)(ProductList)