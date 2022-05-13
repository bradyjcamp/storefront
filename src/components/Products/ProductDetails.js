// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// // import { displayProduct } from '../../store/products'


// function ProductDetails(){

//   // const dispatch = useDispatch();
//   const products = useSelector(state => state.products);

//   // const handleDisplayProduct = (product) => {
//   //   let action = displayProduct(product);
//   //   dispatch(action);
//   // }

//   return(
//     <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="products">
//     {products.selectedProducts.map(product => (
//       <Card sx={{ margin: "10px" }} raised key={product._id}>
//         <CardContent>
//           <Typography gutterBottom variant="h3">{product.name} </Typography>
//           <Typography gutterBottom variant="h3">PRODUCT DETAILS </Typography>
//           <Typography variant="body2" color="text.secondary">Price: ${product.price}</Typography>
//           <Typography variant="body2" color="text.secondary">Inventory: {product.inStock}</Typography>
//           <CardActions>
//             <Button>BUY</Button>
//           </CardActions>
//         </CardContent>
//       </Card>
//     ))
//     }
//   </Box>
//   )
// }

// export default ProductDetails