import *  as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from "../styles/Productcard.module.css";
import MyButton from './myButton';
import { useRouter } from 'next/router'
import productContext from '../context/productContext';

const Productcard = (props) => {
    const router = useRouter()
    const { product } = props;
    const { cart, setCart } = React.useContext(productContext)
    function handleAdd(product) {
        console.log(product.id)
        let _cart = { ...cart }
        if (!_cart.items) {
            _cart.items = {}

        }
        if (!_cart.items[product.id]) {
            _cart.items[product.id] = 1
        } else {
            _cart.items[product._id] += 1
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0

        }
        _cart.totalItems += 1
        setCart(_cart)
        console.log(cart)
    }
    const handleClick = (id) => {
        console.log(id)
        router.push({ pathname: '/productDetails', query: { id: id } })

    }
    return (
        <>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt="product image"
                    />
                    <CardContent style={{ padding: '10px' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title.slice(0, 20)}...
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description.slice(0, 60)}...
                        </Typography>
                        <Typography className={styles.cardPrice} gutterBottom variant="h6" component="div">
                            Price - ₹{product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="primary" onClick={() => { handleClick(product.id) }}>More Details</Button>
                    <Button variant="contained" color="success" size="small" onClick={() => { handleAdd(product) }}>Add to Cart</Button>
                </CardActions>
            </Card>

        </>

    )
}

export default Productcard            