import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ProductCardProps } from "types/component-types";

export default function ProductCard({
  product,
  onAddToCard,
}: ProductCardProps) {
  return (
    <Card sx={{ width: 345 }}>
      <Link to={`/product/${product.id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={product.imageUrl}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {product.price}AMD
          </Typography>
        </CardContent>
      </Link>
      {product.count > 0 && onAddToCard && (
        <CardActions>
          <Button size="small" onClick={() => onAddToCard(product)}>
            Add to cart
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
