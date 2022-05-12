import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Typography, Button, CardContent, CardActions, Card }  from '@mui/material';
import { changeProducts }  from '../../store/products'
import { asyncGetCategory, changeCategory } from '../../store/categories.js';

function CategoriesList() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  
  useEffect(() => {
    dispatch(asyncGetCategory());
  }, [dispatch]);
  
  const handleChangeCategory = (category) => {
    let action = changeCategory(category);
    dispatch(action);
    let selected = changeProducts(category);
    dispatch(selected);
  }

  // console.log(activeCategory);
  // console.log(categories.categories[0]);

  return(
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}id="list">
      {categories.categories.length ?
      categories.categories[0].results.map(category => (
          <Card sx={{ margin: "10px" }} raised key={category._id}>
            <CardContent>
            <Typography gutterBottom variant="h3">{category.name}</Typography>
            <Typography variant="body2" color="text.secondary">{category.description}</Typography>
            </CardContent>
            <CardActions>
            <Button onClick={() => handleChangeCategory(category.name)}>Enter</Button>
            </CardActions>
          </Card>
      )):null}
    </Box>
  )
}



export default CategoriesList;