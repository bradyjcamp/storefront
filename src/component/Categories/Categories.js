import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { changeCategory } from '../../store/categories.js';


function CategoriesList({ activeCategory, categories, changeCategory}) {

  console.log(activeCategory);
  // console.log(categories);

  return(

    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}id="list">
      {categories.map(category => (
          <Card sx={{ margin: "10px" }} raised key={category.id}>
            <CardContent>
            <Typography gutterBottom variant="h3">{category.displayName}</Typography>
            <Typography variant="body2" color="text.secondary">{category.description}</Typography>
            </CardContent>
            <CardActions>
            <Button onClick={() => changeCategory(category.normalizedName)}>Enter</Button>
            </CardActions>
          </Card>
      ))}
    </Box>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    activeCategory: categories.activeCategory,
    categories: categories.categories,
  }
}

const mapDispatchToProps = {
  changeCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);