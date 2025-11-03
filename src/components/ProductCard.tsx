import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

const ProductCard = ({ id, name, price, image, images, description, pricing }: Product) => {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isSliding, setIsSliding] = useState(false);
  
  const displayImages = images && images.length > 0 ? images : [image];
  const currentImage = displayImages[currentImageIndex];

  const handlePrevImage = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('right');
    setCurrentImageIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsSliding(false), 400);
  };

  const handleNextImage = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('left');
    setCurrentImageIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
    setTimeout(() => setIsSliding(false), 400);
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, description });
    toast.success(`${name} added to cart!`);
  };

  const getImageStyle = () => {
    if (id === 3) return { objectPosition: "center 20%" };
    return {};
  };

  const getPrevImageIndex = () => {
    return currentImageIndex === 0 ? displayImages.length - 1 : currentImageIndex - 1;
  };

  const getNextImageIndex = () => {
    return currentImageIndex === displayImages.length - 1 ? 0 : currentImageIndex + 1;
  };

  return (
    <Card className="group overflow-hidden border-border transition-smooth hover:shadow-hover animate-scale-in gradient-card">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted relative">
          <style>{`
            @keyframes slideOutRight {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(100%);
              }
            }
            @keyframes slideInRight {
              from {
                transform: translateX(-100%);
              }
              to {
                
                transform: translateX(0);
              }
            }
            @keyframes slideOutLeft {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-100%);
              }
            }
            @keyframes slideInLeft {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .slide-out-current-right {
              animation: slideOutRight 0.4s ease-in-out forwards;
            }
            .slide-in-next-right {
              animation: slideInRight 0.4s ease-in-out forwards;
            }
            .slide-out-current-left {
              animation: slideOutLeft 0.4s ease-in-out forwards;
            }
            .slide-in-next-left {
              animation: slideInLeft 0.4s ease-in-out forwards;
            }
          `}</style>
          
          {isSliding && (
            <>
              <img
                src={displayImages[slideDirection === 'right' ? getPrevImageIndex() : getNextImageIndex()]}
                alt="previous"
                className={`absolute inset-0 w-full h-full object-cover ${slideDirection === 'right' ? 'slide-out-current-right' : 'slide-out-current-left'}`}
                style={getImageStyle()}
              />
              <img
                src={currentImage}
                alt={name}
                className={`absolute inset-0 w-full h-full object-cover ${slideDirection === 'right' ? 'slide-in-next-right' : 'slide-in-next-left'}`}
                style={getImageStyle()}
              />
            </>
          )}
          
          {!isSliding && (
            <img
              src={currentImage}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={getImageStyle()}
            />
          )}

          {displayImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                disabled={isSliding}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNextImage}
                disabled={isSliding}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {displayImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-6">
        <div className="w-full">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          {pricing ? (
            <div className="text-sm text-muted-foreground mb-3 space-y-1">
              {pricing.map((tier) => (
                <p key={tier.quantity}>
                  {tier.quantity} {tier.quantity === 1 ? 'candle' : 'candles'}: <span className="font-semibold text-primary">Rs.{tier.price}</span>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-xl font-semibold text-primary mb-3">Rs.{price.toFixed(2)}</p>
          )}
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
