import { FC, useMemo, useState } from "react"
import { IProduct } from "../../interface"
import { Grid, Card, CardActionArea, CardMedia, Box, Typography } from "@mui/material";


interface Props {
    product: IProduct;
}

const productCard: FC<Props> = ({ product }) => {
    const [ isHovered, setIsHovered] = useState(false)
    const productImage = useMemo(()=> {
        return isHovered
        ? `products/${product.images[1]}`
        : `products/${product.images[0]}`
    }, [isHovered, product.images])
  return (
    <Grid item 
     xs={6} 
     sm={4} 
     key={product.slug}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
     >
    <Card>
      <CardActionArea>
        <CardMedia
        component='img'
        image={`products/${product.images[1]}`}
        alt={product.title}
        />
      </CardActionArea>
    </Card>
    <Box sx={{ met:1 }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
    </Box>
  </Grid>
  )
}
