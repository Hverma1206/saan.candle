import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

const ProductCard = ({ id, name, price, image, description }: Product) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, description });
    toast.success(`${name} added to cart!`);
  };

  const getImageStyle = () => {
    if (id === 3) return { objectPosition: "center 20%" };
   
    return {};
  };

  return (
    <Card className="group overflow-hidden border-border transition-smooth hover:shadow-hover animate-scale-in gradient-card">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={getImageStyle()}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-6">
        <div className="w-full">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <p className="text-xl font-semibold text-primary">Rs.{price.toFixed(2)}</p>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full group/btn"
          variant="default"
        >
          <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
