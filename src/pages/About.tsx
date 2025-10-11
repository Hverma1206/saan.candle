import { Flame, Heart, Leaf, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground">
            Where passion meets craftsmanship
          </p>
        </div>

        <div className="space-y-12">
          <section className="animate-fade-in">
            <div className="gradient-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-serif font-semibold">The Beginning</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Lumière Candles was born from a simple belief: that the ambiance of a space can 
                transform how we feel, think, and live. What started as a personal passion project 
                in a small home studio has blossomed into a collection of handcrafted luxury candles 
                that bring warmth and elegance to homes around the world.
              </p>
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="gradient-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-serif font-semibold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every space deserves to be a sanctuary. Our mission is to create 
                candles that don't just illuminate rooms, but transform them into havens of comfort 
                and serenity. Each candle is lovingly handcrafted with premium soy wax and natural 
                fragrances, ensuring a clean, long-lasting burn that elevates every moment.
              </p>
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="gradient-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-serif font-semibold">Sustainability</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to protecting the planet we all call home. That's why we use 
                100% natural soy wax, eco-friendly packaging, and sustainable practices in every 
                step of our production. Our candles are vegan, cruelty-free, and designed to be 
                as kind to the earth as they are to your senses.
              </p>
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="gradient-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-serif font-semibold">What Makes Us Unique</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Every Lumière candle is more than just a product—it's an experience. We carefully 
                  select each fragrance note, test countless combinations, and pour each candle by 
                  hand to ensure perfection.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Premium soy wax for a clean, even burn</li>
                  <li>Natural essential oils and fragrance blends</li>
                  <li>Lead-free cotton wicks</li>
                  <li>40+ hour burn time</li>
                  <li>Elegant, reusable containers</li>
                  <li>Handcrafted with love and attention to detail</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="text-center py-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg text-muted-foreground italic">
              "Light a Lumière candle, and let your space tell its story."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
